import React, { Fragment } from "react";
import TabBar from "../components/TabBar";
import { Container, Grid } from "@mui/material";
import BackToTop from "../components/BackToTop";
import Slider from "../components/Slider";
import TopNews from "../components/TopNews";
import NewsSlider from "../components/NewsSlider";

const BusinessPage = () => {
  return (
    <Fragment>
      <Container sx={{ marginTop: "1.5rem" }}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <TabBar
              heading={["Featured News", "Popular News", "Latest News"]}
            />
          </Grid>
          <Grid item md={6}>
            <TabBar heading={["Most Viewed", "Most Read", "Most Recent"]} />
          </Grid>
          <Grid item md={6} xs={12}>
            <TopNews />
          </Grid>
          <Grid item xs={12}>
            <Slider />
          </Grid>
          <Grid item xs={6}>
            <NewsSlider />
          </Grid>
        </Grid>
      </Container>
      <BackToTop />
    </Fragment>
  );
};

export default BusinessPage;
