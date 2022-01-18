import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReadMore from "../components/ReadMore";
import { Container, Grid } from "@mui/material";
import BackToTop from "../components/BackToTop";
import NewsCategory from "../components/NewsCategory";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container style={{ marginTop: "1rem" }}>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <ReadMore />
          </Grid>
          <Grid item md={4}>
            <NewsCategory/>
          </Grid>
        </Grid>
      </Container>
      <Footer />
      <BackToTop />
    </React.Fragment>
  );
};

export default Home;
