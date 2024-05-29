"use client";
import React, { ReactNode, useState } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const CollapsableComponent = ({ title, children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="w-full px-3 py-1.5">
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="text-lg font-black font-display flex justify-between w-full hover:-translate-y-0.5"
      >
        {title} <span className={isExpanded ? "rotate-45" : ""}>+</span>
      </button>
      <p
        style={{ height: !isExpanded ? "0px" : "32px" }}
        className="overflow-hidden leading-normal opacity-60 text-sm mt-2 translate-[height] duration-700 ease-in-out "
      >
        {children}
      </p>
    </div>
  );
};

export default CollapsableComponent;
