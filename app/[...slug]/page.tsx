"use client";
import { useShoeQuery } from "@/actions/useShoe";
import ShoeCard from "@/features/shoe/components/ShoeCard";
import React from "react";

const Page = ({ params }: { params: { slug: string[] } }) => {
  console.log(params);
  const { slug } = params;
  console.log(slug);

  const { data } = useShoeQuery({
    brand: slug[0],
    category: slug[0],
    subcategory: slug[1],
  });

  return (
    <div className="container h-screen flex flex-col gap-2 my-2">
      <div className="text-4xl font-bold">SHOES</div>
      <div className="gap-2 md:gap-4 lg:gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        {data?.map((item) => (
          <ShoeCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Page;
