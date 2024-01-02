"use client";
import { useShoeQuery } from "@/actions/useShoe";
import React, { useState } from "react";
import ShoeCard from "@/features/shoe/components/ShoeCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Loader from "@/components/Loader";

const Page = () => {
  const [orderBy, setOrderBy] = useState("asc");
  const [sortBy, setSortBy] = useState("name");

  const { data, isFetching } = useShoeQuery({ orderBy, sortBy });

  return (
    <div className="container h-auto flex flex-col gap-4 my-4">
      <div className="sticky top-[68px] z-10 bg-white flex justify-between items-center gap-2 py-2 ">
        <div className="flex flex-col">
          <p className="text-sm md:text-2xl lg:text-4xl font-bold">SHOES</p>
          <div className="flex gap-1 text-sm">
            <p className="text-xs md:text-base">
              {data && data?.length ? `${data?.length}` : "0"}
            </p>
            <p className="text-xs md:text-base">
              {data && data?.length > 1 ? "items" : "item"}
            </p>
          </div>
        </div>
        <Select
          onValueChange={(val) => {
            const value = val.split("-");
            setSortBy(value[0]);
            setOrderBy(value[1]);
          }}
        >
          <SelectTrigger className="w-max">
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
      <Separator />
      {isFetching ? (
        <Loader />
      ) : data && data.length ? (
        <div className="gap-2 md:gap-4 lg:gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {data?.map((item) => (
            <Link key={item.id} href={`/shoe/${item.id}`}>
              <ShoeCard key={item.id} item={item} />
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
