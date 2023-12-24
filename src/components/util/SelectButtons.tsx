"use client";

import { useState } from "react";
import Button from "./Button";

type Props = {
  options: { id: string; text: string }[];
  selected?: string;
  onSelect?: (selectedOption: string) => void;
  baseClassName?: string;
  selectedClassName?: string;
};
export default function SelectButtons({
  options,
  onSelect = () => {},
  selected: externalSelected,
  baseClassName = "",
  selectedClassName = "",
}: Props) {
  const [selected, setSelected] = useState("");

  const handleSelectClick = (id: string) => {
    if (externalSelected === undefined) {
      const newSelected = id === selected ? "" : id;
      setSelected(newSelected);
      onSelect(newSelected);
    } else {
      onSelect(id);
    }
  };

  const selectButtons = options.map((option) => {
    const btnIsSelected = selected === option.id;
    const btnClassName = btnIsSelected ? selectedClassName : baseClassName;

    return (
      <Button
        key={option.id}
        onClick={() => handleSelectClick(option.id)}
        className={btnClassName}
        text={option.text}
      />
    );
  });

  return <div className="flex flex-col">{selectButtons}</div>;
}
