import React, { Fragment } from "react";
import SubscriptionForm from "../components/forms/SubscriptionForm";
import { Grid, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BackToTop from "../components/BackToTop";

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
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={8} md={4}>
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
            <SubscriptionForm />
          </Box>
        </Grid>
      </Grid>
      <BackToTop />
    </Fragment>
  );
};

export default SubscriptionPage;
