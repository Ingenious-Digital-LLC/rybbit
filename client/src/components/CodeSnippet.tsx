"use client";

import { Check, Copy } from "lucide-react";
import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CodeSnippetProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string;
  language?: string;
  showLanguageLabel?: boolean;
}

export function CodeSnippet({ code, language, showLanguageLabel = false, className }: CodeSnippetProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  const copyToClipboard = React.useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  }, [code]);

  return (
    <div className={cn("relative", className)}>
      {showLanguageLabel && language && (
        <div className="absolute left-3 top-2 text-xs text-neutral-400 z-10">{language}</div>
      )}
      <SyntaxHighlighter
        language={language || "text"}
        style={oneDark}
        customStyle={{
          margin: 0,
          borderRadius: "0.5rem",
          fontSize: "0.75rem",
          padding: showLanguageLabel ? "2rem 1rem 1rem 1rem" : "1rem",
        }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-2 top-2 h-6 w-6 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-700"
        onClick={copyToClipboard}
      >
        {hasCopied ? <Check className="size-3" /> : <Copy className="size-3" />}
        <span className="sr-only">Copy code</span>
      </Button>
    </div>
  );
}
