"use client";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { brands, subcategory } from "@/constant";
import { Button } from "../ui/button";
import { IoMenu } from "react-icons/io5";
import { useStore } from "@/store";
import { AvatarDropdown } from "./AvatarDropdown";
import { cn } from "@/lib/utils";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Header = () => {
  const { user } = useStore();
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 flex p-4 justify-between items-center bg-background/40 border-b backdrop-blur">
      <Button
        // onClick={toggleSheetOpen}
        className="rounded-full md:hidden"
        variant="ghost"
        size="icon"
      >
        <IoMenu className="h-5 w-5" />
      </Button>
      <Link
        href={"/"}
        className="text-xl font-bold translate-x-6 md:translate-x-0"
      >
        FOOTHUB
      </Link>
      <div className=" hidden justify-center md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>BRANDS</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex w-[400px] flex-col">
                  {brands.map((item) => (
                    <NavigationMenuLink
                      key={item.title}
                      className="p-4 hover:bg-gray-100 hover:cursor-pointer"
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>MEN</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex w-[400px] flex-col">
                  {subcategory.map((item) => (
                    <NavigationMenuLink
                      key={item.title}
                      className="p-4 hover:bg-gray-100 hover:cursor-pointer"
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>WOMEN</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex w-[400px] flex-col">
                  {subcategory.map((item) => (
                    <NavigationMenuLink
                      key={item.title}
                      className="p-4 hover:bg-gray-100 hover:cursor-pointer"
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>KID</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex w-[400px] flex-col">
                  {subcategory.map((item) => (
                    <NavigationMenuLink
                      key={item.title}
                      className="p-4 hover:bg-gray-100 hover:cursor-pointer"
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex gap-1">
        <Button
          variant="outline"
          className={cn(
            "hidden md:block relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
          )}
          // onClick={() => setOpen(true)}
          // {...props}
        >
          <span className="hidden lg:inline-flex">Search documentation...</span>
          <span className="inline-flex lg:hidden">Search...</span>
          <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
        <Button
          // onClick={toggleSheetOpen}
          className="rounded-full md:hidden"
          variant="ghost"
          size="icon"
        >
          <IoSearch className="h-5 w-5" />
        </Button>

        <div>
          {user?.email ? (
            <div className="flex gap-1">
              <Button
                // onClick={toggleSheetOpen}
                className="rounded-full "
                variant="ghost"
                size="icon"
              >
                <FiShoppingCart className="h-5 w-5" />
              </Button>
              <AvatarDropdown />
            </div>
          ) : (
            <Button onClick={() => router.push("/auth")}>Login</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
