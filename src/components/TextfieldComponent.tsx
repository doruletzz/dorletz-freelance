import { cn } from "@/utils/cn";
import React, { ChangeEventHandler, FocusEventHandler, ReactNode } from "react";

type Props<T> = {
  glow?: "yellow" | "blue" | "green" | null;
  disabled?: boolean;
  className?: string;
  id: string;
  type?: string;
  label?: string;
  value?: T;
  autoFocus?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  onChange?: ChangeEventHandler;
  onFocus?: FocusEventHandler;
  onBlur?: ChangeEventHandler;
  error?: string;
  required?: boolean;
};

const TextFieldComponent = <T extends string | number>({
  glow = null,
  disabled,
  id,
  className,
  type,
  value,
  label,
  error,
  startAdornment,
  onBlur,
  onFocus,
  autoFocus,
  endAdornment,
  required,
  onChange,
}: Props<T>) => {
  return (
    <div
      id={id}
      className={cn(
        `relative flex flex-col gap-2 before:absolute before:-inset-1 before:rounded-xl`,
        className
      )}
    >
      <div
        className={cn(
          `relative flex items-center gap-2 rounded-xl border px-2 bg-blue-50 py-0.5 hover:-translate-y-0.5`
        )}
      >
        {startAdornment}
        <div className="group relative w-full">
          {label && (
            <label
              htmlFor={id}
              className={`absolute font-display font-semibold ${
                value ? "top-0.5 text-xs opacity-100" : "text-sm top-2.5 opacity-60"
              } ${error ? "text-red-900 " : "text-blue-900 "} ${
                disabled ? " text-gray-600" : ""
              } text-md  pointer-events-none h-4 transition-all duration-500 ease-in-out-expo group-focus-within:top-0.5 group-focus-within:text-xs`}
            >
              {`${label}${required ? "*" : ""}`}
            </label>
          )}
          <input
            id={id}
            value={value}
            type={type}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            autoFocus={autoFocus}
            disabled={disabled}
            className={`w-full h-full font-bold bg-blue-50 text-sm py-2 outline-none autofill:bg-gray-100 autofill:shadow-[inset_0_0_0px_1000px_rgb(241,245,249)] ${
              label ? "pt-4" : "py-2"
            } ${disabled ? "bg-blue-200 border-gray-600  text-gray-500" : ""} ${
              className ?? ""
            }`}
          />
        </div>
        {endAdornment}
      </div>
    </div>
  );
};

export default TextFieldComponent;
