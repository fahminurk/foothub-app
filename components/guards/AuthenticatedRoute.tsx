"use client";
import { useAuthStore } from "@/store/authStore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useLayoutEffect } from "react";

const AuthenticatedRoute: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const user = useAuthStore().user;
  const router = useRouter();
  const pathname = usePathname();
  const dasboard = [
    "/dashboard",
    "/dashboard/category",
    "/dashboard/product",
    "/dashboard/order",
    "/dashboard/user",
  ];

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }

    if (user && user.role === "USER" && dasboard.includes(pathname)) {
      router.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, router, user]);
  return children;
};

export default AuthenticatedRoute;
