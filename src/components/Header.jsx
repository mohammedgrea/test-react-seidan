import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Box, AppBar, IconButton, Link } from "@mui/material";
import { useTheme } from "@emotion/react";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { ColorModeContext } from "../theme";

export default function Header() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const mode = theme.palette.mode;
  return (
    <AppBar
      position="fixed"
      sx={{
        p: "10px 30px",
        width: "80%",
        borderRadius: "16px",
        background: theme.palette.primary.mainGradient,
        margin: "16px auto",
        left: 0,
        top: 0,
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <h1>SIEDAN</h1>
        <nav>
          <ul>
            <li>
              <Link component={NavLink} color="primary" to="/" end>
                Home
              </Link>
            </li>
            <li>
              <Link component={NavLink} color="primary" to="/product">
                Products
              </Link>
            </li>
            <li>
              <Link component={NavLink} color="primary" to="/Contact">
                Contact
              </Link>
            </li>
            <li>
              <IconButton onClick={colorMode.toggelColorMode}>
                {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
              </IconButton>
            </li>
          </ul>
        </nav>
      </Box>
    </AppBar>
  );
}
