import { Button } from "@/components/ui/button";
import { formatToIDR } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

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
      <Button
        className="w-full"
        variant={"secondary"}
        onClick={() => router.push("/checkout")}
      >
        CHECKOUT
        <FaArrowRight />
      </Button>
    </>
  );
};

export default SidebarCart;
