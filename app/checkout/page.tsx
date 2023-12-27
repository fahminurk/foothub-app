"use client";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { cn, formatToIDR } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { Input } from "@/components/ui/input";
import SidebarCart from "@/features/cart/components/SidebarCart";

const Page = () => {
  const { cart, subTotal, totalItem } = useCartStore();

  const [isSelected, setSelected] = React.useState(false);

  return (
    <div className="container flex flex-col gap-2 my-4 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 min-h-screen">
        <div className="flex flex-col gap-3 col-span-2 lg:p-2 lg:border-r ">
          <div className="flex justify-between">
            <div>
              <p className="text-2xl md:text-4xl font-bold">SHIPPING DETAILS</p>
              <p>Your saved addresses</p>
            </div>
          </div>
          <Separator />

          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className={cn(
                  "grid grid-cols-3 p-3 gap-1 rounded-xl border cursor-pointer",
                  isSelected && "bg-gray-100"
                )}
              >
                <div className="flex justify-center items-center font-bold border-r-2 ">
                  Home
                </div>
                <div className="flex flex-col col-span-2">
                  <p className="overflow-hidden text-ellipsis">
                    Jl. Sudirman blok h1 no 35 asdasaaaaaaa
                  </p>
                  <p>Jakarta, Indonesia, 12190</p>
                  <p>+62 812 3456 789</p>
                </div>
              </div>
            ))}
        </div>
        {/* sidebar cart */}
        <div className="sticky top-20 flex flex-col gap-2 h-max lg:p-2">
          <SidebarCart totalItem={totalItem} subTotal={subTotal} />
        </div>
      </div>
    </div>
  );
};

export default Page;
