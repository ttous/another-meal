import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { Picker } from "../Picker/Picker";
import { ThemeProvider } from "../Theme/ThemeProvider";

export const App: React.FC = () => (
  <>
    <CssBaseline />
    <ThemeProvider>
      <Picker />
    </ThemeProvider>
  </>
);
