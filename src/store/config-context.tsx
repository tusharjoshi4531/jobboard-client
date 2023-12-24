"use client";
import { createContext } from "react";

export type Config = {
  primary: string;
  title: string;
  description: string;
  content: string;
};

const configContext = createContext<Config>({
  primary: "",
  title: "",
  description: "",
  content: "",
});

export function ConfigProvider({
  children,
  config,
}: {
  children: React.ReactNode;
  config: Config;
}) {
  return (
    <configContext.Provider value={config}>{children}</configContext.Provider>
  );
}

export default configContext;
