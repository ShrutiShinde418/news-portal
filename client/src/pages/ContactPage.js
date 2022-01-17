import React, { Fragment } from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <Fragment>
      <Navbar />
      <ContactForm />
      <Footer />
    </Fragment>
  );
};

export default ContactPage;
