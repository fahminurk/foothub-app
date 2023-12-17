import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import QueryProvider from "@/providers/QueryProvider";
import dynamic from "next/dynamic";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
// const Header = dynamic(() => import("@/components/elements/Header"), {
//   ssr: false,
// });
import Header from "@/components/elements/Header";

export const metadata: Metadata = {
  title: "Foothub",
  description: "Foothub E-commerce app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <QueryProvider>
        <Toaster />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            {children}
          </div>
        </body>
      </QueryProvider>
    </html>
  );
}
