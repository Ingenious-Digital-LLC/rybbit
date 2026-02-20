import { Inter } from "next/font/google";
import { cn } from "../lib/utils";
import "./globals.css";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-background text-foreground h-full", inter.className)} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
