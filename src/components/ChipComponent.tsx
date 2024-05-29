import React, { ReactNode } from "react";

type Props = {
  variant: "red" | "green" | "blue" | "gray" | "indigo" | "lime"| "yellow" | "orange";
  children: ReactNode;
};

const VARIANTS = {
    "red": "bg-red-200 text-red-800",
    "orange": "bg-orange-200 text-orange-800",
    "yellow": "bg-yellow-200 text-yellow-800",
    "green": "bg-green-200 text-green-800",
    "emerald": "bg-emerald-200 text-emerald-800",
    "lime": "bg-lime-200 text-lime-800",
    "indigo": "bg-indigo-200 text-indigo-800",
    "blue": "bg-blue-200 text-blue-800",
    "gray": "bg-gray-200 text-gray-900",
}

const ChipComponent = ({ variant, children }: Props) => {
  return <div className={`w-fit text-xs font-semibold font-display px-4 py-1 rounded-full ${VARIANTS[variant]}`}>{children}</div>;
};

export default ChipComponent;
