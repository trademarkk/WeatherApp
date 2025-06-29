import { createContext, useState, useContext } from "react";

const ScaleContext = createContext();

export const ScaleProvider = ({ children }) => {
  const [scale, setScale] = useState("C");

  return (
    <ScaleContext.Provider value={{ scale, setScale }}>
      {children}
    </ScaleContext.Provider>
  );
};

export const useScale = () => {
  return useContext(ScaleContext);
};
