"use client";
import { useShoeQuery } from "@/actions/useShoe";
import ShoeCard from "@/features/shoe/components/ShoeCard";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const Page = ({ params }: { params: { slug: string[] } }) => {
  const { slug } = params;
  const [orderBy, setOrderBy] = useState("asc");
  const [sortBy, setSortBy] = useState("name");

  const { data, isFetching } = useShoeQuery({
    brand: slug[0],
    category: slug[0],
    subcategory: slug[1],
    orderBy,
    sortBy,
  });

  return (
    <div className="container h-screen flex flex-col gap-2 my-2">
      <div className="sticky top-[68px] z-10 border-b bg-white flex justify-between items-center gap-2 py-2 ">
        <div className="flex flex-col">
          <div className="flex gap-2 text-2xl font-bold">
            <p className=""> {slug[0].toUpperCase()}</p>
            {slug[1] && <p>/ {slug[1].toUpperCase()}</p>}
          </div>
          <div className="flex gap-2 text-sm">
            <p>{data && data?.length ? `${data?.length}` : "0"}</p>
            <p>{data && data?.length > 1 ? "items" : "item"}</p>
          </div>
        </div>
        <Select
          onValueChange={(val) => {
            console.log(val);
            const value = val.split("-");
            setSortBy(value[0]);
            setOrderBy(value[1]);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="SORT BY" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name-asc">Name: A to Z</SelectItem>
            <SelectItem value="name-desc">Name: Z to A</SelectItem>
            <SelectItem value="price-desc">Price: high to low</SelectItem>
            <SelectItem value="price-asc">Price: low to high</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {isFetching ? (
        <div className="flex justify-center items-center h-[80vh]">loading</div>
      ) : data && data.length ? (
        <div className="gap-2 md:gap-4 lg:gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {data?.map((item) => (
            <Link href={`/shoe/${item.id}`} key={item.id}>
              <ShoeCard item={item} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[80vh]">
          No items
        </div>
      )}
    </div>
  );
};

export default Page;
