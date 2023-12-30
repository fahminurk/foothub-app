import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import QueryProvider from "@/components/providers/QueryProvider";
import dynamic from "next/dynamic";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
// const Header = dynamic(() => import("@/components/elements/Header"), {
//   ssr: false,
// });
import Header from "@/components/elements/Header";
import Footer from "@/components/elements/Footer";

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
      <Toaster />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className
        )}
      >
        <QueryProvider>
          <main className="relative flex min-h-screen flex-col">
            {children}
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
