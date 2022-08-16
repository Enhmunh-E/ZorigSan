import React, { createContext } from "react";

export const Context = createContext({
  isDonationModalOpen: false,
  setIsDonationModalOpen: () => void 0,
});

export function Provider({ children }) {
  const [isDonationModalOpen, setIsDonationModalOpen] = React.useState(false);
  return (
    <Context.Provider value={{ isDonationModalOpen, setIsDonationModalOpen }}>
      {children}
    </Context.Provider>
  );
}
