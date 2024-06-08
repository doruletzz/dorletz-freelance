"use client";
import React, { ReactNode, useRef, useState } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const CollapsableComponent = ({ title, children }: Props) => {
  const descRef = useRef<HTMLParagraphElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="w-full px-3 py-1.5">
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="text-lg text-left font-black font-display flex justify-between w-full hover:-translate-y-0.5"
      >
        {title} <span className={isExpanded ? "rotate-45" : ""}>+</span>
      </button>
      <p
        ref={descRef}
        style={{ height: !isExpanded ? "0px" : `${descRef.current?.scrollHeight ?? 132}px` }}
        className="overflow-hidden leading-normal opacity-60 text-sm mt-2 translate-[height] duration-700 ease-in-out "
      >
        {children}
      </p>
    </div>
  );
};

export default CollapsableComponent;
