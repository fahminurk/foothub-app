import { HiDotsVertical } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type ActionDropdownProps = {
  children: React.ReactNode[];
};

const ActionDropdown: React.FC<ActionDropdownProps> = ({ children = [] }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="self-start p-1 rounded-full hover:bg-gray-200">
        <HiDotsVertical className="w-5 h-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8}>
        {children.map((child, i) => (
          <DropdownMenuItem key={i}>{child}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionDropdown;
