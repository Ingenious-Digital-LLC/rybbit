// Web Worker for client-side CSV parsing only
// This worker runs in a separate thread to avoid blocking the main UI thread
// Transformation happens on the server

import Papa from "papaparse";
import { DateTime } from "luxon";
import type { WorkerMessageToWorker, WorkerMessageToMain, UmamiEvent } from "@/lib/import/types";

const CHUNK_SIZE = 5000; // Number of rows per batch sent to main thread
const PROGRESS_UPDATE_INTERVAL = 1000; // Update progress every 1000 rows

let currentBatch: UmamiEvent[] = [];
let chunkIndex = 0;
let totalParsed = 0;
let totalSkipped = 0;
let totalErrors = 0;
let errorDetails: Array<{ row: number; message: string }> = [];
let lastProgressUpdate = 0;

// Date range filter (client-side optimization to reduce server load)
let startDate: DateTime | null = null;
let endDate: DateTime | null = null;

// Umami CSV header mapping
const umamiHeaders = [
  undefined,
  "session_id",
  undefined,
  undefined,
  "hostname",
  "browser",
  "os",
  "device",
  "screen",
  "language",
  "country",
  "region",
  "city",
  "url_path",
  "url_query",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "referrer_path",
  "referrer_query",
  "referrer_domain",
  "page_title",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "event_type",
  "event_name",
  undefined,
  "distinct_id",
  "created_at",
  undefined,
];

function createDateRangeFilter(startDateStr?: string, endDateStr?: string) {
  startDate = startDateStr ? DateTime.fromFormat(startDateStr, "yyyy-MM-dd", { zone: "utc" }).startOf("day") : null;
  endDate = endDateStr ? DateTime.fromFormat(endDateStr, "yyyy-MM-dd", { zone: "utc" }).endOf("day") : null;

  if (startDate && !startDate.isValid) {
    throw new Error(`Invalid start date: ${startDateStr}`);
  }

  if (endDate && !endDate.isValid) {
    throw new Error(`Invalid end date: ${endDateStr}`);
  }
}

function isDateInRange(dateStr: string): boolean {
  const createdAt = DateTime.fromFormat(dateStr, "yyyy-MM-dd HH:mm:ss", { zone: "utc" });
  if (!createdAt.isValid) {
    return false;
  }

  if (startDate && createdAt < startDate) {
    return false;
  }

  if (endDate && createdAt > endDate) {
    return false;
  }

  return true;
}

function sendChunk() {
  if (currentBatch.length > 0) {
    const message: WorkerMessageToMain = {
      type: "CHUNK_READY",
      events: currentBatch,
      chunkIndex,
    };
    self.postMessage(message);
    chunkIndex++;
    currentBatch = [];
  }
}

function sendProgress() {
  const message: WorkerMessageToMain = {
    type: "PROGRESS",
    parsed: totalParsed,
    skipped: totalSkipped,
    errors: totalErrors,
  };
  self.postMessage(message);
}

function handleParsedRow(row: unknown, rowIndex: number) {
  const umamiEvent = row as UmamiEvent;

  // Skip rows with missing created_at (required field)
  if (!umamiEvent.created_at) {
    totalSkipped++;
    return;
  }

  // Apply optional date range filter (client-side optimization)
  if (startDate || endDate) {
    if (!isDateInRange(umamiEvent.created_at)) {
      totalSkipped++;
      return;
    }
  }

  // Add to batch (no transformation, send raw row to server)
  currentBatch.push(umamiEvent);
  totalParsed++;

  // Send batch when it reaches chunk size
  if (currentBatch.length >= CHUNK_SIZE) {
    sendChunk();
  }

  // Send progress update periodically
  if (totalParsed - lastProgressUpdate >= PROGRESS_UPDATE_INTERVAL) {
    sendProgress();
    lastProgressUpdate = totalParsed;
  }
}

function parseCSV(file: File) {
  let rowIndex = 0;

  Papa.parse<UmamiEvent>(file, {
    header: true,
    dynamicTyping: true, // Auto-convert strings to numbers/booleans
    skipEmptyLines: "greedy", // Skip all empty lines (improved)
    delimiter: "", // Auto-detect delimiter (comma, tab, semicolon, etc.)
    transformHeader: (header, index) => {
      // Map Umami CSV column positions to field names
      return umamiHeaders[index] || header;
    },
    step: results => {
      if (results.data) {
        handleParsedRow(results.data, rowIndex);
        rowIndex++;
      }
      if (results.errors && results.errors.length > 0) {
        totalErrors++;
        if (errorDetails.length < 100) {
          // Limit error collection to avoid memory issues
          errorDetails.push({
            row: rowIndex,
            message: results.errors.map(e => e.message).join(", "),
          });
        }
      }
    },
    complete: () => {
      // Send final chunk if any
      sendChunk();

      // Send final progress
      sendProgress();

      // Send completion message
      const message: WorkerMessageToMain = {
        type: "COMPLETE",
        totalParsed,
        totalSkipped,
        totalErrors,
        errorDetails,
      };
      self.postMessage(message);
    },
    error: error => {
      const message: WorkerMessageToMain = {
        type: "ERROR",
        message: error.message,
        error,
      };
      self.postMessage(message);
    },
  });
}

// Listen for messages from main thread
self.onmessage = (event: MessageEvent<WorkerMessageToWorker>) => {
  const message = event.data;

  switch (message.type) {
    case "PARSE_START":
      // Reset state
      currentBatch = [];
      chunkIndex = 0;
      totalParsed = 0;
      totalSkipped = 0;
      totalErrors = 0;
      errorDetails = [];
      lastProgressUpdate = 0;

      // Set up date range filter (optional client-side optimization)
      createDateRangeFilter(message.startDate, message.endDate);

      // Start parsing
      parseCSV(message.file);
      break;

    case "CANCEL":
      // Terminate the worker
      self.close();
      break;

    default:
      console.warn("Unknown message type:", message);
  }
};

// Export empty object to make TypeScript happy
export {};
