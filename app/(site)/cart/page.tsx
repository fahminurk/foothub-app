"use client";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { formatToIDR } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { Input } from "@/components/ui/input";
import SidebarCart from "@/features/cart/components/SidebarCart";
import AuthenticatedRoute from "@/components/guards/AuthenticatedRoute";

const Page = () => {
  const {
    cart,
    subTotal,
    totalItem,
    incrementItem,
    decrementItem,
    removeItem,
  } = useCartStore();

  return (
    <AuthenticatedRoute>
      <div className="container flex flex-col gap-2 my-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="flex flex-col gap-3 col-span-2 ">
            <div className="flex justify-between">
              <div>
                <p className="text-2xl md:text-4xl font-bold">YOUR CART</p>
                <div className="flex gap-1 text-sm md:text-base">
                  <p>{totalItem}</p>
                  <p>{totalItem > 1 ? "items" : "item"}</p>
                </div>
              </div>
            </div>
            <Separator />

            {!cart.length && (
              <div className="flex justify-center items-center h-96">
                NO ITEM
              </div>
            )}
            {cart.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-3 sm:grid-cols-5 gap-2 pb-2 border-b"
              >
                <img
                  src={item.shoeImage[0].imgUrl}
                  alt="img"
                  className="object-cover"
                />
                <div className="relative flex flex-col col-span-2">
                  <p className="font-bold md:text-xl ">{item.name}</p>
                  <p className="">Gender: {item.category.name}</p>
                  <p className="">Size: {item.size}</p>
                  <div className="w-full absolute bottom-0 flex justify-end">
                    <Button
                      className=" text-xs h-5 w-12"
                      onClick={() => removeItem(item)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <div className="flex ">
                    <Button
                      disabled={item.qty === 1}
                      className="p-2 rounded-none"
                      onClick={() => decrementItem(item)}
                    >
                      -
                    </Button>
                    <Input className="rounded-none w-9" value={item.qty} />
                    <Button
                      disabled={
                        item.qty ===
                          item.stock.find((val) => val.size.size === item.size)
                            ?.stock &&
                        item.size ===
                          item.stock.find((val) => val.size.size === item.size)
                            ?.size.size
                      }
                      className="p-2 rounded-none"
                      onClick={() => incrementItem(item)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between col-span-2 sm:col-span-1">
                  <p className="font-bold">X</p>
                  <p>{formatToIDR(item.totalPrice)}</p>
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
    </AuthenticatedRoute>
  );
};

export default Page;
