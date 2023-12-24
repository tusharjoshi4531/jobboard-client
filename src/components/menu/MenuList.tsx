"use client";

import { useState } from "react";
import Button from "../util/Button";
import { Menu, MenuEntry } from "./Types";

type Props = {
  menu: Menu;
};
export default function MenuList({ menu }: Props) {
  const [entryIsActive, setEntryIsActive] = useState<Record<string, boolean>>(
    {}
  );

  const handleClick = (entry: MenuEntry) => {
    entry.onClick && entry.onClick(entry.id, !entryIsActive[entry.id]);

    setEntryIsActive((state) => {
      const newState = state;
      console.log(newState);
      newState[entry.id] = !state[entry.id];
      return newState;
    });
  };
  const menuComponents = menu.entries.map((entry) => {
    console.log(entryIsActive);
    const adornment = entryIsActive[entry.id]
      ? menu.toggleActiveAdornment
      : menu.toggleInactiveAdornment;

    console.log(adornment, entryIsActive[entry.id]);

    return (
      <Button
        className={menu.className}
        onClick={() => handleClick(entry)}
        key={entry.id}
        text={entry.text}
        endAdornment={adornment}
      />
    );
  });

  return (
    <div className="flex flex-col m-2">
      {menuComponents}
      <Button
        className="bg-zinc-500 text-white"
        text="General"
        // endAdornment={<UpIcon />}
      />
      <Button
        className="bg-zinc-500 text-white"
        text="Navigation"
        // endAdornment={<UpIcon />}
      />
    </div>
  );
}
