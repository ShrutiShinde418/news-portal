import React, { Fragment } from "react";
import LoginRegistrationForm from "../components/LoginRegistrationForm";
import BackToTop from "../components/BackToTop";


const LoginOrRegistrationPage = () => {
  return (
    <Fragment>
      <LoginRegistrationForm />
      <BackToTop />
    </Fragment>
  );
};

export default LoginOrRegistrationPage;
