import React, { Fragment } from "react";
import BackToTop from "../components/BackToTop";
import ContactForm from "../components/forms/ContactForm";

const ContactPage = () => {
  return (
    <Fragment>
      <ContactForm />
      <BackToTop />
    </Fragment>
  );
};

export default ContactPage;
