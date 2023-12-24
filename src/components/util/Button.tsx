"use client";

import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  text?: string;
  textAlign?: "start" | "end" | "center";
  className?: string;
  endAdornment?: React.ReactNode;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  onClick?: () => void;
};
export default function Button({
  text = "",
  textAlign = "start",
  className = "",
  onClick = () => {},
  buttonProps = {},
  endAdornment = <></>,
}: ButtonProps) {
  const buttonClasses = `rounded-lg font-medium p-1 flex ${className}`;
  return (
    <button onClick={onClick} className={buttonClasses} {...buttonProps}>
      <span className={`ml-2 flex-1 text-${textAlign}`}>{text}</span>
      {endAdornment}
    </button>
  );
}
