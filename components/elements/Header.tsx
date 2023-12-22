"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { IoMenu } from "react-icons/io5";
import { useStore } from "@/store";
import { AvatarDropdown } from "./AvatarDropdown";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import HeaderNavigationMenu from "./HeaderNavigationMenu";

const Header = () => {
  const { user } = useStore();
  const router = useRouter();

  return (
    <div className="sticky -top-1 z-50 flex p-4 justify-between items-center bg-background/70 border-b backdrop-blur">
      <Button className="rounded-full md:hidden" variant="ghost" size="icon">
        <IoMenu className="h-5 w-5" />
      </Button>
      <Link
        href={"/"}
        className="text-xl font-bold translate-x-6 md:translate-x-0"
      >
        FOOTHUB
      </Link>
      <HeaderNavigationMenu />

      <div className="flex gap-1">
        <Input className="hidden lg:block" />
        <Button className="rounded-full lg:hidden" variant="ghost" size="icon">
          <IoSearch className="h-5 w-5" />
        </Button>

        <div>
          {user?.email ? (
            <div className="flex gap-1">
              <Button className="rounded-full " variant="ghost" size="icon">
                <FiShoppingCart className="h-5 w-5" />
              </Button>
              <AvatarDropdown />
            </div>
          ) : (
            <Button onClick={() => router.push("/login")}>Login</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
