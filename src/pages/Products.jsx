import React from "react";
import { Box, Grid } from "@mui/material";
import Card from "../components/Card";
import { data } from "../assets/data";
export default function Products() {
  const produts = data.map((product) => (
    <Grid item xs={12} md={6} xl={4} key={product.id}>
      <Card
        image={product.image}
        price={product.price}
        desc={product.desc}
        title={product.name}
      />
    </Grid>
  ));
  return (
    <Box minHeight="100vh">
      <Box variant m="128px auto" minHeight="100vh" width="80%">
        <Grid container spacing={{ xs: 2, md: 3 }} height="100%">
          {produts}
        </Grid>
      </Box>
    </Box>
  );
}
