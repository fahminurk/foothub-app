import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputGroupProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactElement;
  onClick?: () => void;
}

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
  ({ className, type, icon, onClick, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full border rounded-full px-3 py-1 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <div
            className="flex bg-gray-200 items-center absolute inset-y-0 right-0 p-3 cursor-pointer hover:bg-gray-200/50 rounded-full"
            onClick={onClick}
          >
            {icon}
          </div>
        )}
      </div>
    );
  }
);
InputGroup.displayName = "InputGroup";
export { InputGroup };
