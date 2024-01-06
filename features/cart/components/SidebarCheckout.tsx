import { Button } from "@/components/ui/button";
import { formatToIDR } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";
import { FaArrowRight } from "react-icons/fa";

const SidebarCheckout: React.FC<{ totalItem: number; subTotal: number }> = ({
  totalItem,
  subTotal,
}) => {
  const router = useRouter();
  const { cart } = useCartStore();
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

      <div className="flex flex-col">
        {cart.map((item, i) => (
          <div key={i} className="flex  gap-2 pb-2">
            <img
              src={item.shoeImage[0].imgUrl}
              alt="img"
              className="object-cover h-32"
            />
            <div className="flex flex-col col-span-2 flex-1">
              <p className="font-bold">{item.name}</p>
              <p className="">Gender: {item.category.name}</p>
              <p className="">Size: {item.size}</p>
              <div className="flex flex-col items-end">
                <div className="flex gap-2">
                  <p>{item.qty} x</p>
                  <p>{formatToIDR(item.price)}</p>
                </div>
                <div className="flex gap-2">
                  <p>Total</p>
                  <p>{formatToIDR(item.totalPrice)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        className="w-full"
        variant={"secondary"}
        onClick={() => toast.info("still in development")}
      >
        CONTINUE
        <FaArrowRight />
      </Button>
    </>
  );
};

export default SidebarCheckout;
