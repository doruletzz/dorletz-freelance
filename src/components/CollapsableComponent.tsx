"use client";
import React, { ReactNode, useRef, useState } from "react";
import { Button } from ".";

type Props = {
  title: string;
  children: ReactNode;
};

const CollapsableComponent = ({ title, children }: Props) => {
  const descRef = useRef<HTMLParagraphElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="w-full px-3 py-1.5">
      <Button
        variant="text"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="xl:text-lg text-lg text-left font-black font-display flex justify-between w-full p-0 px-0"
      >
        {title}{" "}
        <span
          className={`transition-transform duration-700 ease-in-out ${
            isExpanded ? "rotate-45 ml-2" : " ml-2"
          }`}
        >
          +
        </span>
      </Button>
      <p
        ref={descRef}
        style={{
          height: !isExpanded
            ? "0px"
            : `${descRef.current?.scrollHeight ?? 132}px`,
        }}
        className="overflow-hidden leading-normal opacity-60 text-sm mt-2 mr-4 translate-[height] duration-700 ease-in-out "
      >
        {children}
      </p>
    </div>
  );
};

export default CollapsableComponent;
