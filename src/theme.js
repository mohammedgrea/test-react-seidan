import { createTheme } from "@mui/material";
import { createContext, useState } from "react";

const palette = (mode) =>
  mode === "dark"
    ? {
        primary: "#232323",
        secondary: "#000000",
        colorGradinet1: "#525252",
        colorGradinet2: "#2F2F2F",
        linkColor: "#E7E7E7",
        red: "red",
        hover: "rgba(255, 255, 255, 0.7)",
      }
    : {
        primary: "#E7E7E7",
        secondary: "#FFFFFF",
        colorGradinet1: "#F6F6F6",
        linkColor: "#232323",
        red: "red",
        colorGradinet2: "#DFDFDF",
        hover: "rgba(0, 0, 0, 0.6)",
      };

const settingsColor = (mode) => {
  const colors = palette(mode);
  return {
    palette: {
      mode: mode,

      primary: {
        main: colors.primary,
        mainGradient: `linear-gradient(to left,${colors.colorGradinet1}, ${colors.colorGradinet2})`,
        linkColor: colors.linkColor,
      },
      secondary: {
        main: colors.secondary,
      },
      background: {
        default: colors.primary,
      },
    },
    components: {
      MuiInputLabel: {
        styleOverrides: {
          root: { "&.Mui-focused": { color: colors.hover } },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: colors.linkColor,
            textDecoration: "none",
            "&:hover": { color: "#2aa794" },
          },
        },
      },
    },
  };
};

export const ColorModeContext = createContext();

export const useMode = () => {
  const [mode, setMode] = useState("light");
  const colorMode = {
    toggelColorMode: () =>
      setMode((previous) => (previous === "dark" ? "light" : "dark")),
  };
  const theme = createTheme(settingsColor(mode));
  return [theme, colorMode];
};
