import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import React, { useContext, useState } from "react";
import { ThemeEnum, themeOptionsMap } from "./themes";

type ThemeContextType = {
  theme: ThemeEnum;
  setTheme: (theme: ThemeEnum) => void;
};

const DEFAULT_CONTEXT: ThemeContextType = {
  theme: ThemeEnum.LIGHT,
  setTheme: () => {},
};

const ThemeContext = React.createContext<ThemeContextType>(DEFAULT_CONTEXT);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeEnum>(DEFAULT_CONTEXT.theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MuiThemeProvider theme={themeOptionsMap[theme]}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
