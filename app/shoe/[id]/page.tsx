"use client";
import { useShoeDetailQuery } from "@/actions/useShoe";
import SidebarShoeDetails from "@/features/shoe/components/SidebarShoeDetails";
import React, { useState } from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { data } = useShoeDetailQuery(id);

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
