import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  Theme: {},
});
const Theme = {
  pallete: {
    primary: {
      "primary-blue": "#0C265C",
      "primary-white": "#fff",
      "primary-black": "#000",
      "primary-light-blue": "#4FADE0",
    },
    secondary: {
      "secondary-blue-2": "#2C6396",
      "secondary-blue-3": "#243C6C",
      "secondary-red": "#F87171",
      "secondary-light-blue-4": "#86C2CC",
      "secondary-blue-5": "#1C4984",
      "secondary-grey": "#6B7280",
    },
  },
};
export const ThemeProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ Theme }}>{children}</AuthContext.Provider>
  );
};