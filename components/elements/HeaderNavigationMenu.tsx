import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";
import { brands, subcategory } from "@/constant";

const HeaderNavigationMenu = () => {
  const [selectedImg, setSelectedImg] = React.useState<number>(0);

  return (
    <NavigationMenu className="hidden justify-center md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>BRANDS</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex ">
              <div className="flex w-[400px] flex-col p-1">
                {brands.map((item, i) => (
                  <Link
                    href={item.href}
                    key={item.title}
                    className="p-4 hover:bg-gray-100 hover:cursor-pointer rounded-md"
                    onMouseOver={() => setSelectedImg(i)}
                    onMouseLeave={() => setSelectedImg(0)}
                  >
                    <NavigationMenuLink>{item.title}</NavigationMenuLink>
                  </Link>
                ))}
              </div>
              <img
                src={brands[selectedImg].img}
                alt="logo"
                className="w-52 h-auto object-cover"
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>MEN</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-[400px] flex-col">
              {subcategory.map((item) => (
                <Link
                  key={item.title}
                  href={`/men/${item.href}`}
                  className="p-4 hover:bg-gray-100 hover:cursor-pointer"
                >
                  <NavigationMenuLink>{item.title}</NavigationMenuLink>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>WOMEN</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-[400px] flex-col">
              {subcategory.map((item) => (
                <Link
                  key={item.title}
                  href={`/women/${item.href}`}
                  className="p-4 hover:bg-gray-100 hover:cursor-pointer"
                >
                  <NavigationMenuLink>{item.title}</NavigationMenuLink>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>KID</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-[400px] flex-col">
              {subcategory.map((item) => (
                <Link
                  key={item.title}
                  href={`/kid/${item.href}`}
                  className="p-4 hover:bg-gray-100 hover:cursor-pointer"
                >
                  <NavigationMenuLink>{item.title}</NavigationMenuLink>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="py-2 w-14 pl-4 rounded-md hover:bg-white/70 cursor-pointer">
          <Link href={"/shoe"} passHref legacyBehavior>
            <NavigationMenuLink>All</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderNavigationMenu;
