import { Separator } from "@/components/ui/separator";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatToIDR } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="container flex flex-col gap-2 my-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="flex flex-col gap-3 col-span-2 lg:p-2 lg:border-r ">
          <div className="flex justify-between">
            <div>
              <p className="text-2xl md:text-4xl font-bold">YOUR CART</p>
              <p>0 item</p>
            </div>
          </div>
          <Separator />
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-3 sm:grid-cols-5 gap-2 pb-2 border-b"
            >
              <img
                src="/shoes/adidas-campus-80s.jpg"
                alt="img"
                className="object-cover"
              />
              <div className="relative flex flex-col col-span-2">
                <p className="font-bold text-xl truncate">adidas blablaaaaaa</p>
                <p className="">Gender: Men</p>
                <p className="">Size: 44</p>
                <div className="w-full absolute bottom-0 flex justify-end">
                  <Button className=" text-xs h-5 w-12">Delete</Button>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <Select defaultValue="1">
                  <SelectTrigger className="w-fit gap-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="min-w-0">
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between col-span-2 sm:col-span-1">
                <p className="font-bold">X</p>
                <p>{formatToIDR(100000)}</p>
              </div>
            </div>
          ))}
        </div>
        {/* sidebar cart */}
        <div className="sticky top-20 flex flex-col gap-2 h-max lg:p-2">
          <p className="font-bold text-2xl md:text-4xl">ORDER SUMMARY</p>
          <div>
            <p className="py-2 border-b">2 Products</p>
            <div className="flex justify-between py-2 border-b">
              <p>Subtotal</p>
              <p>{formatToIDR(200000)}</p>
            </div>
            <div className="flex justify-between py-2 border-b">
              <p>Delivery</p>
              <p>FREE</p>
            </div>
            <div className="flex justify-between py-2 font-bold">
              <p>Total</p>
              <p>{formatToIDR(200000)}</p>
            </div>
          </div>
          <Button>CHECKOUT</Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
