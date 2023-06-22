import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IconButton, Link } from "@mui/material";
import { useTheme } from "@emotion/react";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { ColorModeContext } from "../theme";
import { styled } from "@mui/material/styles";

const HeaderContainer = styled("div")(({ theme }) => ({
  position: "fixed",
  width: "80%",
  padding: "10px 30px",
  borderRadius: "16px",
  background: theme.palette.primary.mainGradient,
  margin: "16px auto",
  left: "50%",
  transform: "translateX(-50%)",
  top: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.down("md")]: {
    width: "90%",
    padding: "10px 10px",
  },
  [theme.breakpoints.up("md")]: { width: "90%" },
  [theme.breakpoints.up("lg")]: { width: "80%" },
}));

export default function Header() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const mode = theme.palette.mode;
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
}
