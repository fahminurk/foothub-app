import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import QueryProvider from "@/components/providers/QueryProvider";
import dynamic from "next/dynamic";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { metadataKeywords } from "@/constant";
// const Header = dynamic(() => import("@/components/elements/Header"), {
//   ssr: false,
// });

export const metadata: Metadata = {
  title: "Foothub",
  description: "Foothub E-commerce app",
  keywords: metadataKeywords,
  authors: [{ name: "Fahmi Nurkamil", url: "https://github.com/fahminurk" }],
  openGraph: {
    type: "website",
    title: "Foothub",
    description: "Foothub E-commerce app",
    url: "https://foothub.fahminurkamil.tech",
    siteName: "Foothub",
    // images: [
    //   {
    //     url: "https://i.ibb.co/hKRd9gT/og-porto.jpg",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
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
