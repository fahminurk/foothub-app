"use client";
import Footer from "@/components/elements/Footer";
import Header from "@/components/elements/Header";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useAuthStore().user;
  const router = useRouter();
  useEffect(() => {
    if (user && user?.role !== "USER") {
      router.replace("/dashboard");
    }
  }, [user, router]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
