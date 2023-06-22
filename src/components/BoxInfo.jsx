import { Box, Typography } from "@mui/material";

export default function BoxInfo({ bg, color1, color2, txtColor, number }) {
  return (
    <Box
      bgcolor={bg}
      height="300px"
      borderRadius="16px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="50px"
    >
      <Box
        height="100px"
        width="100px"
        sx={{ background: ` linear-gradient(${color1},${color2})` }}
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3" fontWeight="bold" color={txtColor}>
          {number}
        </Typography>
      </Box>
      <Box textAlign="center">
        <Typography variant="h2" fontWeight="bold" color={txtColor}>
          320K
        </Typography>
        <Typography variant="h6" color={color2}>
          Coded Elements
        </Typography>
      </Box>
    </Box>
  );
}
