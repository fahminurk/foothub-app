import { GuestRoute } from "@/components/guards/GuestRoute";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GuestRoute>{children}</GuestRoute>;
}
