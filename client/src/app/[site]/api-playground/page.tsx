"use client";

import { ApiPlayground } from "./components/ApiPlayground";

export default function ApiPlaygroundPage() {
  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          API Playground
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Test API endpoints and view code examples in multiple languages
        </p>
      </div>
      <ApiPlayground />
    </div>
  );
}
