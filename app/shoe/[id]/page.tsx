"use client";
import { useShoeDetailQuery } from "@/actions/useShoe";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { data } = useShoeDetailQuery(id);

  if (!data) return <div>loading</div>;
  return (
    <div className="container flex flex-col gap-2 my-4">
      <div className="grid md:grid-cols-3">
        <img
          src={data?.shoeImage[0].imgUrl}
          alt="img"
          className="w-full object-cover col-span-2"
        />
        <div>p</div>
      </div>
    </div>
  );
};

export default Page;
