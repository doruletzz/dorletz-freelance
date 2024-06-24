import React, { ReactNode } from "react";

type Props<T extends React.ElementType> = {
  style?: React.CSSProperties;
  className?: string;
  variant:
    | "red"
    | "green"
    | "blue"
    | "gray"
    | "indigo"
    | "lime"
    | "yellow"
    | "purple"
    | "emerald"
    | "orange";
  children: ReactNode;
  component?: T;
} & React.ComponentPropsWithoutRef<T>;

const VARIANTS = {
  red: "bg-red-100 text-red-800",
  orange: "bg-orange-100 text-orange-800",
  yellow: "bg-yellow-100 text-yellow-800",
  green: "bg-green-100 text-green-800",
  emerald: "bg-emerald-100 text-emerald-800",
  lime: "bg-lime-100 text-lime-800",
  indigo: "bg-indigo-100 text-indigo-800",
  purple: "bg-purple-100 text-purple-800",
  blue: "bg-blue-100 text-blue-800",
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
      className={`sm:p-6 p-4 flex flex-col gap-1.5 hover:-translate-y-2 transition-translate duration-700 ease-in-out rounded-3xl  ${VARIANTS[variant]} ${className}`}
      {...otherProps}
    >
      {children}
    </OverridenComponent>
  );
};

export default CardComponent;
