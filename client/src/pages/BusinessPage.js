import React from "react";
import TabBar from "../components/TabBar";
import { Container, Grid } from "@mui/material";

const BusinessPage = () => {
  return (
    <Container sx={{ marginTop: "1.5rem" }}>
      <Grid container>
        <Grid item md={6}>
          <TabBar />
        </Grid>
        <Grid item md={6}>
          <TabBar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BusinessPage;
