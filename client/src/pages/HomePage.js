import React from "react";
import ReadMore from "../components/ReadMore";
import { Container, Grid } from "@mui/material";
import BackToTop from "../components/BackToTop";
import NewsCategory from "../components/NewsCategory";
import TagsCloud from "../components/TagsCloud";
import InThisCategory from "../components/InThisCategory";
import NewsGallery from "../components/NewsGallery";

const Home = () => {
  return (
    <React.Fragment>
      <Container style={{ marginTop: "1rem" }}>
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid item md={4}>
            <NewsCategory />
          </Grid>
          <Grid item md={4}>
            <TagsCloud />
          </Grid>
          <Grid item md={4}>
            <InThisCategory />
          </Grid>
          <Grid item md={3}>
            <ReadMore />
          </Grid>
          <Grid item md={9}>
            <NewsGallery />
          </Grid>
        </Grid>
      </Container>
      <BackToTop />
    </React.Fragment>
  );
};

export default Home;
