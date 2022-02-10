import React, { Fragment } from "react";
import TabBar from "../components/TabBar";
import { Container, Grid } from "@mui/material";
import BackToTop from "../components/BackToTop";
import TopNews from "../components/TopNews";

const BusinessPage = () => {
  return (
    <Fragment>
      <Container sx={{ marginTop: "1.5rem" }}>
        <Grid container>
          <Grid item md={6}>
            <TabBar />
          </Grid>
          <Grid item md={6}>
            <TabBar />
          </Grid>
          <Grid item md={6} xs={12}>
            <TopNews />
          </Grid>
        </Grid>
      </Container>
      <BackToTop />
    </Fragment>
  );
};

export default BusinessPage;
