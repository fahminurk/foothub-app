import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
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
        <DrawerFooter>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold">BRANDS</AccordionTrigger>
              <AccordionContent>
                <div
                  className="flex flex-col p-1"
                  onClick={() => setOpen(false)}
                >
                  {brands.map((item, i) => (
                    <Link
                      href={item.href}
                      key={item.title}
                      className="p-4 hover:bg-gray-100 hover:cursor-pointer rounded-md"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold">MEN</AccordionTrigger>
              <AccordionContent>
                <div className="flex  flex-col" onClick={() => setOpen(false)}>
                  {subcategory.map((item) => (
                    <Link
                      key={item.title}
                      href={`/men/${item.href}`}
                      className="p-4 hover:bg-gray-100 hover:cursor-pointer"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold">WOMEN</AccordionTrigger>
              <AccordionContent>
                <div className="flex  flex-col" onClick={() => setOpen(false)}>
                  {subcategory.map((item) => (
                    <Link
                      key={item.title}
                      href={`/women/${item.href}`}
                      className="p-4 hover:bg-gray-100 hover:cursor-pointer"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-bold">KID</AccordionTrigger>
              <AccordionContent>
                <div className="flex  flex-col" onClick={() => setOpen(false)}>
                  {subcategory.map((item) => (
                    <Link
                      key={item.title}
                      href={`/kid/${item.href}`}
                      className="p-4 hover:bg-gray-100 hover:cursor-pointer"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BurgerMenu;
