import React, { Fragment } from "react";
import BackToTop from "../components/BackToTop";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <Fragment>
      <Navbar />
      <ContactForm />
      <Footer />
      <BackToTop />
    </Fragment>
  );
};

export default ContactPage;
