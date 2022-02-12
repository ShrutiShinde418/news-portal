import React, { Fragment } from "react";
import BackToTop from "../components/BackToTop";
import LoginForm from "../components/forms/LoginForm";
import { makeStyles } from "@mui/styles";
import { authActions } from "../store/auth";
import { Grid, Typography, Container, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import RegistrationForm from "../components/forms/RegistrationForm";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
    "& .MuiTypography-h6": {
      fontSize: "16px",
      fontWeight: theme.typography.fontWeightRegular,
      color: "#353535",
    },
    "& .MuiTypography-h5": {
      marginBottom: "1rem",
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  pagination: {
    "& a": {
      color: theme.palette.primary.main,
      textDecoration: "none",
    },
    "& a:hover": {
      color: theme.palette.common.black,
    },
  },
}));
const LoginOrRegistrationPage = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const successMessage = useSelector((state) => state.auth.successMessage);
  const classes = useStyles();
  return (
    <Fragment>
      <Container className={classes.root}>
        <Typography
          component="h1"
          variant="h6"
          className={classes.pagination}
          sx={{ marginBottom: "25px" }}
        >
          <Link to="/">Home</Link> &nbsp;/&nbsp; Registration or Login
        </Typography>
        {successMessage && (
          <Alert
            severity="success"
            sx={{ marginBottom: "20px" }}
            onClose={() => dispatch(authActions.successHandler(""))}
          >
            {successMessage}
          </Alert>
        )}
        {errorMessage && (
          <Alert
            severity="error"
            sx={{ marginBottom: "20px" }}
            onClose={() => dispatch(authActions.errorHandler(""))}
          >
            {errorMessage}
          </Alert>
        )}
        <Grid container spacing={5}>
          <Grid item md={6}>
            <Typography variant="h5" component="h2">
              Login
            </Typography>
            <LoginForm />
          </Grid>
          <Grid item md={6}>
            <Typography variant="h5" component="h2">
              Register
            </Typography>
            <RegistrationForm />
          </Grid>
        </Grid>
      </Container>
      <BackToTop />
    </Fragment>
  );
};

export default LoginOrRegistrationPage;
