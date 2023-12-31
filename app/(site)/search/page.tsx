"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/shoe");
  }, [router]);
  return <div className="flex w-full h-[80vh]"></div>;
};

export default Page;
