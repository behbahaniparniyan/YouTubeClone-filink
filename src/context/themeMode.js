import { createContext, useContext, useState, React } from "react";

export const ThemeModeContext = createContext();
export const ThemeModeContextSetState = createContext();

export default function ThemeModeProvider({ children }) {
  const [lightMode, setLightMode] = useState(false);
  return (
    <ThemeModeContext.Provider value={lightMode}>
      <ThemeModeContextSetState.Provider value={setLightMode}>
        {children}
      </ThemeModeContextSetState.Provider>
    </ThemeModeContext.Provider>
  );
}

export function useLightModeState() {
  return useContext(ThemeModeContext);
}

export function useLightModeSetState() {
  return useContext(ThemeModeContextSetState);
}
