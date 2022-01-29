import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  Typography,
  Container,
  FormControl,
  OutlinedInput,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
    "& .MuiTypography-h6": {
      fontSize: "16px",
      fontWeight: theme.typography.fontWeightRegular,
      color: "#353535",
    },
    "& .MuiButton-contained": {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      textTransform: "none",
      fontSize: "16px",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
    "& .MuiOutlinedInput-input": {
      height: "15px",
      color: "#999999",
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

const LoginForm = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography
        component="h1"
        variant="h6"
        className={classes.pagination}
        sx={{ marginBottom: "25px" }}
      >
        <Link to="/">Home</Link> &nbsp;/&nbsp; Registration or Login
      </Typography>
      <Grid container spacing={5}>
        <Grid item md={6}>
          <Typography variant="h5" component="h2">
            Login
          </Typography>
          <form>
            <FormControl fullWidth sx={{ marginBottom: "1.5rem" }}>
              <OutlinedInput placeholder="Email *" required type="email" />
            </FormControl>
            <FormControl fullWidth>
              <OutlinedInput
                placeholder="Password *"
                required
                type="password"
              />
            </FormControl>
            <Button variant="contained" style={{ marginTop: "15px" }}>
              Login
            </Button>
          </form>
        </Grid>
        <Grid item md={6}>
          <Typography variant="h5" component="h2">
            Register
          </Typography>
          <form>
            <FormControl fullWidth sx={{ marginBottom: "1.5rem" }}>
              <OutlinedInput placeholder="Full Name *" required type="text" />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: "1.5rem" }}>
              <OutlinedInput placeholder="Email *" required type="email" />
            </FormControl>
            <FormControl fullWidth>
              <OutlinedInput
                placeholder="Password *"
                required
                type="password"
              />
            </FormControl>
            <Button variant="contained" style={{ marginTop: "15px" }}>
              Registration
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginForm;
