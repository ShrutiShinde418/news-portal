import React, { Fragment } from "react";
import SubscriptionForm from "../components/forms/SubscriptionForm";
import { Grid, Box, Typography, Alert } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BackToTop from "../components/BackToTop";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTypography-h5": {
      marginBottom: "1rem",
      fontWeight: theme.typography.fontWeightBold,
    },
    "& .MuiFormGroup-root": {
      flexDirection: "row",
    },
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const SubscriptionPage = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const successMessage = useSelector((state) => state.auth.successMessage);
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={8} lg={4} md={6}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Subscribe
            </Typography>
            {errorMessage && (
              <Alert
                severity="error"
                sx={{ marginBottom: "20px" }}
                onClose={() => dispatch(authActions.errorHandler(""))}
              >
                {errorMessage}
              </Alert>
            )}
            {successMessage && (
              <Alert
                severity="success"
                sx={{ marginBottom: "20px" }}
                onClose={() => dispatch(authActions.successHandler(""))}
              >
                {successMessage}
              </Alert>
            )}
            <SubscriptionForm />
          </Box>
        </Grid>
      </Grid>
      <BackToTop />
    </Fragment>
  );
};

export default SubscriptionPage;
