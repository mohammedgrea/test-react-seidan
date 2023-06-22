import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import BoxInfo from "../components/BoxInfo";
export default function Homepage() {
  const theme = useTheme();
  return (
    <Box width="100%">
      <Box
        sx={{
          backgroundImage: "url(images/background-image.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        height="100vh"
      >
        <Box position="relative">
          <Typography variant="h1" color="white">
            SIEDAN
          </Typography>
          <Box
            position="absolute"
            right="-170px"
            top="-20px"
            p={1}
            borderRadius={2}
            bgcolor={theme.palette.primary.main}
          >
            <Typography variant="h4">Test Rect</Typography>
          </Box>
        </Box>
        <Box width="600px" textAlign="center" color="white">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters,
          </p>
        </Box>
      </Box>
      <Box
        width="80%"
        minHeight="400px"
        sx={{ background: theme.palette.primary.mainGradient }}
        borderRadius="16px"
        p="20px 30px"
        margin="128px auto "
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="var(--main-shadow)"
      >
        <Grid container spacing={{ xs: 2, md: 5 }} height="100%">
          <Grid item xs={12} md={6} xl={4}>
            <BoxInfo
              bg="#D1E9FC"
              color1="#B9E0FF"
              color2="#87C6F9"
              txtColor="#00457C"
              number={1}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <BoxInfo
              bg="#6BEBD9"
              color1="#AAF6EC"
              color2="#00DABB"
              txtColor="#0E4248"
              number={2}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <BoxInfo
              bg="#FDE7D9"
              color1="#FFD4B9"
              color2="#FF6300"
              txtColor="#B54600"
              number={3}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
