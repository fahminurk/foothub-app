import { TShoe, TSizeAndStock } from "@/types";
import React, { useState } from "react";
import { formatToIDR } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";

const SidebarShoeDetails: React.FC<{
  data: { shoe: TShoe; sizeAndStock: TSizeAndStock[] };
}> = ({ data }) => {
  const { user } = useAuthStore();
  const [size, setSize] = useState<string | null>(null);
  const [stock, setStock] = useState<number | null>(null);

  return (
    <div className="sticky top-16 flex flex-col p-4 h-max lg:h-screen lg:p-10 ">
      <div className="flex justify-between pb-2 items-center">
        <p>
          {data.shoe.category.name} • {data.shoe.subCategory.name}
        </p>
        <p className="p-2 rounded-full text-xs bg-black text-white dark:bg-white dark:text-black">
          {data.shoe.status}
        </p>
      </div>
      <Separator />
      <p className="font-bold text-2xl md:text-4xl pt-5">{data.shoe.name}</p>
      <p className="text-sm lg:text-lg pb-5">{formatToIDR(data.shoe.price)}</p>
      <Separator />
      <div className="py-5">
        <p>{data.shoe.description}</p>
      </div>
      <Separator />
      <div className="flex flex-col py-5">
        <p className="text-sm font-semibold pb-2">SELECT SIZE</p>
        {!data.sizeAndStock.length && (
          <p className="p-2 text-center">No size available</p>
        )}
        <div className="flex flex-wrap gap-2 grid-cols-3">
          {data.sizeAndStock.map((val) =>
            val.stock < 1 ? (
              <Button disabled variant={"outline"} key={val.size}>
                {val.size}
              </Button>
            ) : (
              <Button
                variant={size === val.size ? "default" : "outline"}
                key={val.size}
                onClick={() => {
                  size == val.size ? setSize(null) : setSize(val.size);
                  stock == val.stock ? setStock(null) : setStock(val.stock);
                }}
                className=""
              >
                {val.size}
              </Button>
            )
          )}
        </div>
        {stock && <p className="text-sm py-2">{stock} left in stock</p>}
      </div>
      <Separator />
      <div className="pt-2 w-full">
        <Button disabled={!user?.email} className="w-full">
          ADD TO CART
        </Button>
        {!user?.email && (
          <p className="text-center text-sm text-red-400">
            Login first to add to cart
          </p>
        )}
      </div>
    </div>
  );
};

export default SidebarShoeDetails;
