import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "@mui/material/Container";

const Home = () => {
  return (
    <React.Fragment>
      <Container maxwidth="Sm">
        <Navbar />
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default Home;
