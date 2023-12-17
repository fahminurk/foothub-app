import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useStore } from "@/store";

export const AvatarDropdown = () => {
  const { user, onLogout } = useStore();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="self-start">
          <Avatar className="h-10 w-10">
            <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
            <AvatarImage
              src={"http://localhost:8000/" + user?.avatarUrl || ""}
            />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={8}>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/dashboard">Dashboard Creator</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={onLogout}
            className="font-semibold text-red-500"
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
