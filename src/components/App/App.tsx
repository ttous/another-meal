import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { Header } from "../Header";
import { Picker } from "../Picker";
import { ThemeProvider } from "../Theme";

export const App: React.FC = () => (
  <>
    <CssBaseline />
    <ThemeProvider>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header />
        <Picker />
      </Box>
    </ThemeProvider>
  </>
);
