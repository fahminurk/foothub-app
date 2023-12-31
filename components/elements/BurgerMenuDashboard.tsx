import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoMenu } from "react-icons/io5";
import { brands, subcategory } from "@/constant";
import Link from "next/link";
import { Input } from "../ui/input";

const BurgerMenuDashboard = () => {
  const [open, setOpen] = useState(false);

  const menu = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Category",
      link: "/dashboard/category",
    },
    {
      name: "Product",
      link: "/dashboard/product",
    },
    {
      name: "Stock",
      link: "/dashboard/stock",
    },
  ];
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          className="rounded-full sm:hidden"
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
        >
          <IoMenu className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-background">
        <DrawerFooter className=" flex flex-col gap-0 [&>*:nth-child(even)]:flex-row-reverse">
          {menu.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 p-2 text-xl font-bold hover:bg-black hover:text-white transition-all"
            >
              <p> {item.name}</p>
              <div className="h-1 w-full bg-black" />
            </Link>
          ))}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BurgerMenuDashboard;
