"use client"
import React from "react";

type Option = {
  id: string;
  component: React.ReactNode;
};

type Props = {
  options: Option[];
  selected?: string;
  onSelect?: (selectedOption: string) => void;
  className?: string;
};
export default function CustomSelect({
  options,
  selected = "",
  onSelect = () => {},
  className = "",
}: Props) {
  const selectComponents = options.map((option) => {
    const optionIsSelected = selected === option.id;
    const borderClassName = "border-blue-500";
    return (
      <button
        key={option.id}
        type="button"
        onClick={() => onSelect(option.id)}
        className={`rounded-lg overflow-hidden mr-2 border-2 hover:border-blue-500 ${
          optionIsSelected ? borderClassName : " border-transparent"
        }`}
      >
        {option.component}
      </button>
    );
  });

  const containerClassname = `fex fex-row align-middle w-full ${className}`;
  return <div className={containerClassname}>{selectComponents}</div>;
}
