import { Button } from "@/components/ui/button";
import { formatToIDR } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

const SidebarCart: React.FC<{ totalItem: number; subTotal: number }> = ({
  totalItem,
  subTotal,
}) => {
  const router = useRouter();
  return (
    <>
      <p className="font-bold text-2xl md:text-4xl">ORDER SUMMARY</p>
      <div>
        <div className="flex gap-1 py-3 border-b">
          <p>{totalItem}</p>
          <p>{totalItem > 1 ? "items" : "item"}</p>
        </div>
        <div className="flex justify-between py-2 border-b">
          <p>Subtotal</p>
          <p>{formatToIDR(subTotal)}</p>
        </div>
        <div className="flex justify-between py-2 border-b">
          <p>Delivery</p>
          <p>FREE</p>
        </div>
        <div className="flex justify-between py-2 font-bold">
          <p>Total</p>
          <p>{formatToIDR(subTotal)}</p>
        </div>
      </div>
      <Button onClick={() => router.push("/checkout")}>CHECKOUT</Button>
    </>
  );
};

export default SidebarCart;
