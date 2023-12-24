"use client";
import { useShoeDetailQuery } from "@/actions/useShoe";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SidebarShoeDetails from "@/features/shoe/components/SidebarShoeDetails";
import { formatToIDR } from "@/lib/utils";
import { useAuthStore } from "@/store/authStore";
import React, { useState } from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const user = useAuthStore((state) => state.user);
  const { id } = params;
  const { data } = useShoeDetailQuery(id);
  const [size, setSize] = useState<string | null>(null);
  const [stock, setStock] = useState<number | null>(null);

  if (!data) return <div>loading</div>;
  return (
    <div className="container flex flex-col gap-2 my-4">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <img
          src={data.shoe.shoeImage[0].imgUrl}
          alt="img"
          className="w-full object-cover col-span-2"
        />
        <SidebarShoeDetails data={data} />
      </div>
    </div>
  );
};

export default Page;
