"use client";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useLayoutEffect } from "react";

const AuthenticatedRoute: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const user = useAuthStore().user;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return children;
};

export default AuthenticatedRoute;
