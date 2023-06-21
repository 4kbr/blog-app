"use client";
import { ReactNode, createContext, useContext, useState } from "react";

type themeContextType = {
  toggle: Function;
  node: string;
};

const themeContextDefaultValues: themeContextType = {
  node: "dark",
  toggle: () => {},
};

export const ThemeContext = createContext<themeContextType>(
  themeContextDefaultValues
);

export const useTheme = () => useContext(ThemeContext);

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [node, setNode] = useState<string>("dark");

  const toggle = () => {
    setNode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ node, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
