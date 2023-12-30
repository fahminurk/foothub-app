"use client";
import { useAuthStore } from "@/store/authStore";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import BurgerMenuDashboard from "./BurgerMenuDashboard";

const HeaderDashboard = () => {
  const { user } = useAuthStore();

  return (
    <div className="sticky -top-1 z-50 flex p-4 justify-between items-center bg-background/70 border-b backdrop-blur">
      <BurgerMenuDashboard />
      <p className="text-xl hidden font-bold sm:block">FOOTHUB</p>

      {user && (
        <div className="flex gap-2">
          <div className="text-right">
            <p className="font-bold">{user?.name}</p>
            <p className="text-xs">{user?.role}</p>
          </div>
          <Avatar className="h-10 w-10">
            <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
            <AvatarImage className="object-cover" src={user?.avatarUrl} />
          </Avatar>
        </div>
      )}
    </div>
  );
};

export default HeaderDashboard;
