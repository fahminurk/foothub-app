"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { AvatarDropdown } from "./AvatarDropdown";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import HeaderNavigationMenu from "./HeaderNavigationMenu";
import BurgerMenu from "./BurgerMenu";
import { useAuthStore } from "@/store/authStore";

const Header = () => {
  const { user } = useAuthStore();
  const router = useRouter();

  return (
    <div className="sticky -top-1 z-50 flex p-4 justify-between items-center bg-background/70 border-b backdrop-blur">
      <BurgerMenu />
      <Link href={"/"} className="text-xl font-bold md:translate-x-0">
        FOOTHUB
      </Link>
      <HeaderNavigationMenu />

      <div className="flex gap-1">
        <Input className="hidden lg:block" />
        <Button
          className="rounded-full hidden md:flex lg:hidden"
          variant="ghost"
          size="icon"
        >
          <IoSearch className="h-5 w-5" />
        </Button>

        <div>
          {user?.email ? (
            <div className="flex gap-1">
              <Button
                onClick={() => router.push("/cart")}
                className="rounded-full "
                variant="ghost"
                size="icon"
              >
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
