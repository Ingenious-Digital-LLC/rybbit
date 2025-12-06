"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePlaygroundStore } from "../hooks/usePlaygroundStore";
import { parameterMetadata } from "../utils/endpointConfig";
import { FilterBuilder } from "./FilterBuilder";
import { TimezoneSelect } from "./TimezoneSelect";
import { RequestBodyEditor } from "./RequestBodyEditor";

export function ParameterControls() {
  const {
    selectedEndpoint,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    endpointParams,
    setEndpointParam,
    pathParams,
    setPathParam,
  } = usePlaygroundStore();

  if (!selectedEndpoint) {
    return (
      <div className="h-full flex items-center justify-center text-neutral-500 dark:text-neutral-400 p-4">
        <p className="text-sm text-center">
          Select an endpoint from the list to configure parameters
        </p>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-4 space-y-6">
      <div>
        <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
          {selectedEndpoint.name}
        </h2>
        {selectedEndpoint.description && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            {selectedEndpoint.description}
          </p>
        )}
      </div>

      {/* Path Parameters */}
      {selectedEndpoint.pathParams && selectedEndpoint.pathParams.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            Path Parameters
          </h3>
          {selectedEndpoint.pathParams.map((param) => {
            const meta = parameterMetadata[param];
            return (
              <div key={param} className="space-y-1">
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {meta?.label || param}
                </label>
                <Input
                  value={pathParams[param] || ""}
                  onChange={(e) => setPathParam(param, e.target.value)}
                  placeholder={meta?.placeholder || `Enter ${param}`}
                  className="h-8 text-xs"
                  type={meta?.type === "number" ? "number" : "text"}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Common Parameters */}
      {selectedEndpoint.hasCommonParams && (
        <div className="space-y-3">
          <h3 className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            Time Range
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Start Date
              </label>
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                End Date
              </label>
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="h-8 text-xs"
              />
            </div>
          </div>
          <TimezoneSelect />
          <FilterBuilder />
        </div>
      )}

      {/* Endpoint-Specific Parameters */}
      {selectedEndpoint.specificParams &&
        selectedEndpoint.specificParams.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              {selectedEndpoint.hasCommonParams
                ? "Additional Parameters"
                : "Parameters"}
            </h3>
            {selectedEndpoint.specificParams.map((param) => {
              const meta = parameterMetadata[param];
              const isRequired = selectedEndpoint.requiredParams?.includes(param);
              if (!meta) {
                return (
                  <div key={param} className="space-y-1">
                    <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      {param}
                      {isRequired && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    <Input
                      value={endpointParams[param] || ""}
                      onChange={(e) => setEndpointParam(param, e.target.value)}
                      placeholder={`Enter ${param}`}
                      className="h-8 text-xs"
                    />
                  </div>
                );
              }

              if (meta.type === "select" && meta.options) {
                return (
                  <div key={param} className="space-y-1">
                    <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      {meta.label}
                      {isRequired && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    <Select
                      value={endpointParams[param] || ""}
                      onValueChange={(value) => setEndpointParam(param, value)}
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue placeholder={`Select ${meta.label}`} />
                      </SelectTrigger>
                      <SelectContent>
                        {meta.options.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                );
              }

              return (
                <div key={param} className="space-y-1">
                  <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {meta.label}
                    {isRequired && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  <Input
                    type={meta.type === "number" ? "number" : "text"}
                    value={endpointParams[param] || ""}
                    onChange={(e) => setEndpointParam(param, e.target.value)}
                    placeholder={meta.placeholder || `Enter ${meta.label}`}
                    className="h-8 text-xs"
                  />
                </div>
              );
            })}
          </div>
        )}

      {/* Request Body */}
      {selectedEndpoint.hasRequestBody && <RequestBodyEditor />}
    </div>
  );
}
