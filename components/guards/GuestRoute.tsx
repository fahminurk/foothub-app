"use client";
import { useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/authStore";

export const GuestRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
  const user = useAuthStore().user;
  const router = useRouter();

  useLayoutEffect(() => {
    console.log(user);

    if (user) {
      router.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return children;
};
