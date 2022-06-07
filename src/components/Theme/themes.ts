import { createTheme, Theme, ThemeOptions } from "@mui/material";

export enum ThemeEnum {
  LIGHT,
  DARK,
}

const commonThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#53bfd2",
    },
    secondary: {
      main: "#ec5c92",
    },
  },
};

const lightTheme = createTheme(
  {
    palette: {
      mode: "light",
    },
  },
  commonThemeOptions
);

const darkTheme = createTheme(
  {
    palette: {
      mode: "dark",
    },
  },
  commonThemeOptions
);

export const themeOptionsMap: { [theme in ThemeEnum]: Theme } = {
  [ThemeEnum.LIGHT]: lightTheme,
  [ThemeEnum.DARK]: darkTheme,
};
