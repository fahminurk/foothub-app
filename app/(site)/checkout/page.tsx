"use client";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import SidebarCart from "@/features/cart/components/SidebarCart";
import { useAddressQuery } from "@/actions/useAddress";
import AddressCard from "@/features/profile/components/AddressCard";
import { TAddress } from "@/types";

const Page = () => {
  const { subTotal, totalItem } = useCartStore();
  const { data } = useAddressQuery();
  const isPrimary = data?.find((val) => val.isPrimary);
  const [selectedAddress, setSelectedAddress] = useState<TAddress | undefined>(
    undefined
  );

  useEffect(() => {
    setSelectedAddress(isPrimary);
  }, [isPrimary]);

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

          {data?.map((val) => (
            <AddressCard
              key={val.id}
              val={val}
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
            />
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
