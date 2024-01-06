"use client";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { useAddressQuery } from "@/actions/useAddress";
import AddressCard from "@/features/profile/components/AddressCard";
import { TAddress } from "@/types";
import AuthenticatedRoute from "@/components/guards/AuthenticatedRoute";
import SidebarCheckout from "@/features/cart/components/SidebarCheckout";

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
    <AuthenticatedRoute>
      <div className="container flex flex-col gap-2 my-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="flex flex-col gap-3 col-span-2 ">
            <div className="flex justify-between">
              <div>
                <p className="text-2xl md:text-4xl font-bold">
                  SHIPPING DETAILS
                </p>
                <p>Your saved addresses</p>
              </div>
            </div>
            <Separator />

            {!data?.length && (
              <div className="flex justify-center items-center h-96">
                no address
              </div>
            )}

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
            <SidebarCheckout totalItem={totalItem} subTotal={subTotal} />
          </div>
        </div>
      </div>
    </AuthenticatedRoute>
  );
};

export default Page;
