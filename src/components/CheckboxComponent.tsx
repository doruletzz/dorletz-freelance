"use client";

import React, { ChangeEventHandler } from "react";

type Props = {
  id: string;
  label: string;
  name?: string;
  type?: "checkbox" | "radio";
  value: string;
  onChange?: ChangeEventHandler;
};

const CheckboxComponent = ({
  id,
  name,
  type = "checkbox",
  label,
  value,
  onChange,
}: Props) => {
  return (
    <div className="group flex gap-2 rounded-2xl bg-blue-50 bg-opacity-75 py-0.5 hover:bg-opacity-100 hover:-translate-y-0.5">
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`ml-4 my-auto peer appearance-none size-3 aspect-square 
                          border  border-pink-600 
                          cursor-pointer  
                          hover:bg-pink-400 hover:scale-110
                          checked:bg-pink-600 ${type === "radio" ? "rounded-full" : "rounded-sm"}`}
      />
      <label
        htmlFor={id}
        className="w-full pr-4 py-3 text-sm font-display font-medium group-hover:opacity-100 opacity-75 peer-checked:opacity-100 peer-checked:font-bold"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxComponent;
