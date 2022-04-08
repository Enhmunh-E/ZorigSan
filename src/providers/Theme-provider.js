import React, { createContext } from "react";

export const ThemeContext = createContext({
  Theme: {},
});
const Theme = {
  pallete: {
    primary: {
      "primary-black": "#000",
      "primary-blue": "#0C265C",
      "primary-light-blue": "#4FADE0",
      "primary-white": "#fff",
    },
    secondary: {
      "secondary-blue-2": "#2C6396",
      "secondary-blue-3": "#243C6C",
      "secondary-blue-5": "#1C4984",
      "secondary-grey": "#6B7280",
      "secondary-light-blue-4": "#86C2CC",
      "secondary-red": "#F87171",
    },
  },
};
export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ Theme }}>{children}</ThemeContext.Provider>
  );
}
