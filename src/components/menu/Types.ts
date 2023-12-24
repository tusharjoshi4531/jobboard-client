import React from "react";

export type MenuEntry = {
  id: string;
  text: string;
  type: "Toggle" | "Click";
  onClick: (id: string, isActive: boolean) => void;
  submenu?: Menu;
};

export type Menu = {
  className: string;
  toggleActiveAdornment: React.ReactNode;
  toggleInactiveAdornment: React.ReactNode;
  entries: MenuEntry[]
};
