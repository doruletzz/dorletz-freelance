'use client'

import React, { ChangeEventHandler } from "react";

type Props = {
  id: string;
  label: string;
  value: string;
  onChange?: ChangeEventHandler;
};

const CheckboxComponent = ({ id, label, value, onChange }: Props) => {
  return (
    <div className="group flex gap-2 items-center rounded-xl bg-white bg-opacity-90 hover:bg-opacity-100 hover:-translate-y-0.5">
      <input id={id} type="checkbox" value={value} onChange={onChange} className="ml-4 py-2" />
      <label htmlFor={id} className="w-full pr-4 py-3 text-sm font-bold group-hover:opacity-100 opacity-75">{label}</label>
    </div>
  );
};

export default CheckboxComponent;
