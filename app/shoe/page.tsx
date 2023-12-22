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

const Page = () => {
  const [orderBy, setOrderBy] = useState("asc");
  const [sortBy, setSortBy] = useState("name");

  const { data } = useShoeQuery({ orderBy, sortBy });

  return (
    <div className="container h-screen flex flex-col gap-2 my-2">
      <div className="text-4xl font-bold">SHOES</div>
      <div className="flex justify-end gap-2">
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
      <div className="gap-2 md:gap-4 lg:gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        {data?.map((item) => (
          <ShoeCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Page;
