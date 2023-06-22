import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
export default function Card({ image, price, desc, title }) {
  const theme = useTheme();
  return (
    <Box
      height="300px"
      borderRadius="16px"
      sx={{ background: theme.palette.primary.mainGradient }}
      boxShadow="var(--main-shadow)"
      pb="20px"
    >
      <Box height="60%" borderRadius="16px">
        <img
          loading="lazy"
          src={image}
          width="100%"
          height="100%"
          style={{ borderRadius: "16px 16px 0 0", objectFit: "cover" }}
          alt={title}
        />
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="10px 20px"
      >
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ background: "linear-gradient(to left,#45DAC3,#28A491)" }}
          p="5px"
          color="white"
          borderRadius="4px"
        >
          {price}$
        </Typography>
      </Box>
      <Typography fontSize="11px" p="10px 20px" width="90%">
        {desc}
      </Typography>
    </Box>
  );
}
