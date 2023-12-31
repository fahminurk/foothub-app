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

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          className="rounded-full md:hidden"
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
        >
          <IoMenu className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-background">
        <DrawerHeader className="relative flex justify-between items-center gap-4">
          {/* <p className="text-xl font-bold">FOOTHUB</p> */}
          <Input className="" />
          <Button className="absolute right-4" size={"sm"}>
            search
          </Button>
        </DrawerHeader>
        <DrawerFooter className="gap-0">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold">BRANDS</AccordionTrigger>
              <AccordionContent
                className=" flex flex-col gap-0 [&>*:nth-child(even)]:flex-row-reverse"
                onClick={() => setOpen(false)}
              >
                {brands.map((item, i) => (
                  <Link
                    href={item.href}
                    key={item.title}
                    className="flex items-center gap-2 p-2 text-xl font-bold hover:bg-black hover:text-white transition-all"
                  >
                    <p> {item.title}</p>
                    <div className="h-1 w-full bg-black" />
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold">MEN</AccordionTrigger>
              <AccordionContent
                className=" flex flex-col gap-0 [&>*:nth-child(even)]:flex-row-reverse"
                onClick={() => setOpen(false)}
              >
                {subcategory.map((item, i) => (
                  <Link
                    href={`/Men/${item.href}`}
                    key={item.title}
                    className="flex items-center gap-2 p-2 text-xl font-bold hover:bg-black hover:text-white transition-all"
                  >
                    <p> {item.title}</p>
                    <div className="h-1 w-full bg-black" />
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold">WOMEN</AccordionTrigger>
              <AccordionContent
                className=" flex flex-col gap-0 [&>*:nth-child(even)]:flex-row-reverse"
                onClick={() => setOpen(false)}
              >
                {subcategory.map((item, i) => (
                  <Link
                    href={`/Women/${item.href}`}
                    key={item.title}
                    className="flex items-center gap-2 p-2 text-xl font-bold hover:bg-black hover:text-white transition-all"
                  >
                    <p> {item.title}</p>
                    <div className="h-1 w-full bg-black" />
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-bold">KID</AccordionTrigger>
              <AccordionContent
                className=" flex flex-col gap-0 [&>*:nth-child(even)]:flex-row-reverse"
                onClick={() => setOpen(false)}
              >
                {subcategory.map((item, i) => (
                  <Link
                    href={`/Kid/${item.href}`}
                    key={item.title}
                    className="flex items-center gap-2 p-2 text-xl font-bold hover:bg-black hover:text-white transition-all"
                  >
                    <p> {item.title}</p>
                    <div className="h-1 w-full bg-black" />
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link
            href={"/shoe"}
            className="py-3 font-bold hover:underline"
            onClick={() => setOpen(false)}
          >
            ALL
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BurgerMenu;
