import { Typography, Box, IconButton } from "@mui/material";
import { FacebookOutlined, GiteOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      margin="auto"
      p="64px 0"
      textAlign="center"
      borderTop={`8px solid ${theme.palette.secondary.main} `}
    >
      <Box display="flex" flexDirection="column" alignItems="center" mb="32px">
        <Typography variant="h1" fontWeight="bold" color="var(--main-color)">
          SIEDAN
        </Typography>
        <Box display="flex">
          <IconButton>
            <FacebookOutlined />
          </IconButton>
          <IconButton>
            <GiteOutlined />
          </IconButton>
          <IconButton>
            <FacebookOutlined />
          </IconButton>
          <IconButton>
            <GiteOutlined />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="h6">
        All rights reserved. Copyright © 2023{" "}
      </Typography>
    </Box>
  );
}
