import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

type Props<T extends React.ElementType> = {
  style?: React.CSSProperties;
  className?: string;
  variant:
    | "red"
    | "black"
    | "green"
    | "blue"
    | "gray"
    | "indigo"
    | "lime"
    | "yellow"
    | "purple"
    | "emerald"
    | "pink"
    | "orange";
  children: ReactNode;
  component?: T;
} & React.ComponentPropsWithoutRef<T>;

const VARIANTS = {
  black: 'bg-gray-900 text-white font-display hover:shadow-xl hover:shadow-blue-100 hover:bg-blue-800',
  red: "bg-red-100 hover:bg-red-200 border-red-300 text-red-800",
  pink: "bg-pink-100 hover:bg-pink-200 border-pink-300 text-pink-800",
  orange: "bg-orange-100 hover:bg-orange-200 border-orange-300 text-orange-800",
  yellow: "bg-yellow-100 hover:bg-yellow-200 border-yellow-300 text-yellow-800",
  green: "bg-green-100 hover:bg-green-200 border-green-300 text-green-800",
  emerald: "bg-emerald-100 hover:bg-emerald-200 border-emerald-300 text-emerald-800",
  lime: "bg-lime-100 hover:bg-lime-200 border-lime-300 text-lime-800",
  indigo: "bg-indigo-100 hover:bg-indigo-200 border-indigo-300 text-indigo-800",
  purple: "bg-purple-100 hover:bg-purple-200 border-purple-300 text-purple-800",
  blue: "bg-blue-100 hover:bg-blue-200 border-blue-300 text-blue-800",
  gray: "bg-gray-100 text-gray-900",
};

const CardComponent = <T extends React.ElementType>({
  variant,
  component,
  style,
  className,
  children,
  ...otherProps
}: Props<T>) => {
  const OverridenComponent = component || "div";
  return (
    <OverridenComponent
      style={style}
      className={cn(
        `sm:p-6 p-4 flex flex-col gap-1.5 hover:-translate-y-2 border transition-[transform_background] overflow-hidden duration-700 ease-in-out rounded-3xl  ${VARIANTS[variant]}`,
        className
      )}
      {...otherProps}
    >
      {children}
    </OverridenComponent>
  );
};

export default CardComponent;
