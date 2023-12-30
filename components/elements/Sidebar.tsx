"use client";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { HiHome, HiOutlineLogout } from "react-icons/hi";
import { BiCategoryAlt, BiUser } from "react-icons/bi";
import { MdOutlineTask } from "react-icons/md";
import SidebarItem from "./SidebarItem";
import { PiSneaker } from "react-icons/pi";
import { useAuthStore } from "@/store/authStore";

const Sidebar = () => {
  const pathname = usePathname();
  const Logout = useAuthStore().onLogout;

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Dashboard",
        active: pathname === "/dashboard",
        href: "/dashboard",
      },
      {
        icon: BiCategoryAlt,
        label: "Category",
        active: pathname === "/dashboard/category",
        href: "/dashboard/category",
      },
      {
        icon: PiSneaker,
        label: "Product",
        active: pathname === "/dashboard/product",
        href: "/dashboard/product",
      },
      {
        icon: MdOutlineTask,
        label: "Order",
        active: pathname === "/dashboard/order",
        href: "/dashboard/order",
      },
      {
        icon: BiUser,
        label: "User",
        active: pathname === "/dashboard/user",
        href: "/dashboard/user",
      },
    ],
    [pathname]
  );
  return (
    <div className="hidden sm:flex sticky top-0 h-screen border-r">
      <div className="flex flex-col p-3 h-full justify-between">
        <div className="flex flex-col gap-y-4">
          {routes.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>
        <div onClick={() => Logout()}>
          <SidebarItem icon={HiOutlineLogout} label="Logout" href="/" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
