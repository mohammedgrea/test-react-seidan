import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Box, CssBaseline } from "@mui/material";

import "./app.css";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@mui/material";
export default function () {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
