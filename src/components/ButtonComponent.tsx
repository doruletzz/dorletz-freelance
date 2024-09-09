import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

type Props<T extends React.ElementType> = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  component?: T;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

const VARIANTS = {
  primary:
    "bg-gray-900 text-white font-display hover:shadow-xl hover:shadow-blue-100 hover:bg-blue-800",
  secondary:
    "text-gray-900 border border-gray-700 font-display bg-gray-100 bg-opacity-75 hover:bg-opacity-100 backdrop-blur-sm",
  text: "bg-none",
};

const ButtonComponent = <T extends React.ElementType>({
  component,
  className,
  variant = "primary",
  children,
  ...otherProps
}: Props<T>) => {
  const OverridenComponent = component || "button";

  return (
    <OverridenComponent
      className={cn(
        `px-8 font-bold xl:text-sm text-xs py-2.5 rounded-3xl transition-all duration-500 ease-in-out hover:-translate-y-1`,
        VARIANTS[variant],
        className
      )}
      {...otherProps}
    >
      {children}
    </OverridenComponent>
  );
};

export default ButtonComponent;
