"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { AvatarDropdown } from "./AvatarDropdown";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import HeaderNavigationMenu from "./HeaderNavigationMenu";
import BurgerMenu from "./BurgerMenu";
import { useAuthStore } from "@/store/authStore";
import { useState } from "react";
import { InputGroup } from "../ui/inputGroup";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Header = () => {
  const { user } = useAuthStore();
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");

  return (
    <div className="sticky -top-1 z-50 flex p-4 justify-between items-center bg-background/70 border-b backdrop-blur">
      <BurgerMenu />
      <Link href={"/"} className="text-xl font-bold md:translate-x-0">
        FOOTHUB
      </Link>
      <HeaderNavigationMenu />

      <div className="flex gap-2">
        <div className="hidden lg:block">
          <InputGroup
            placeholder="Search..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onClick={() => {
              router.push(`/search/${keyword.replace(" ", "-")}`);
              setKeyword("");
            }}
            icon={<IoSearch />}
          />
        </div>
        <HoverCard>
          <HoverCardTrigger>
            <div className="h-10 w-10 justify-center items-center rounded-full hidden md:flex lg:hidden border hover:bg-gray-100 hover:cursor-pointer">
              <IoSearch className="h-5 w-5" />
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <InputGroup
              placeholder="Search..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onClick={() => {
                router.push(`/search/${keyword.replace(" ", "-")}`);
                setKeyword("");
              }}
              icon={<IoSearch />}
            />
          </HoverCardContent>
        </HoverCard>
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
              {user.email && <AvatarDropdown />}
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
