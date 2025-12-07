"use client";

import { Textarea } from "@/components/ui/textarea";
import { usePlaygroundStore } from "../hooks/usePlaygroundStore";
import { useState } from "react";

export function RequestBodyEditor() {
  const { requestBody, setRequestBody } = usePlaygroundStore();
  const [error, setError] = useState<string | null>(null);

  const handleChange = (value: string) => {
    setRequestBody(value);
    if (value.trim() === "") {
      setError(null);
      return;
    }
    try {
      JSON.parse(value);
      setError(null);
    } catch {
      setError("Invalid JSON");
    }
  };

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Request Body (JSON)</label>
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
      <Textarea
        value={requestBody}
        onChange={e => handleChange(e.target.value)}
        placeholder='{"key": "value"}'
        className="text-xxs min-h-[120px]"
      />
    </div>
  );
}
