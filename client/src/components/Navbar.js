import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { NavLink, Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import logo from "../assets/logo.png";
import advertisement from "../assets/ads-1.jpg";
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  AppBar,
  Toolbar,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.black,
    marginBottom: "1rem",
  },
  topNav__content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#FFF",
    fontFamily: theme.typography.fontFamily,
    fontSize: "14px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  topNav__contact: {
    display: "flex",
    color: theme.palette.primary.main,
  },
  text: {
    marginLeft: "0.3rem",
    "&:first-of-type": {
      marginRight: "1.1rem",
    },
  },
  tab__menu: {
    "& a": {
      color: theme.palette.primary.main,
      marginRight: "0.5rem",
      textDecoration: "none",
    },
    "& a:last-of-type": {
      marginRight: 0,
    },
    "& a span:hover": {
      color: theme.palette.common.white,
    },
    [theme.breakpoints.down("md")]:{
      paddingBottom: 10,
      paddingRight: 18,
    }
  },
  logo: {
    maxWidth: "100%",
    maxHeight: "60px",
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  search: {
    "&:focus": {
      border: `1px solid ${theme.palette.common.black}`,
    },
    borderRadius: theme.shape.borderRadius,
  },
  btn: {
    height: "50px",
    width: "45px",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    border: "none",
    "& .fa-search": {
      color: theme.palette.primary.main,
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      "& .fa-search": {
        color: theme.palette.common.white,
      },
    },
    padding: 0,
  },
  appBar: {
    position: "-webkit-sticky",
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightRegular,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiToolbar-root": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  navigation: {
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: theme.palette.common.white,
      padding: "10px 10px 15px 10px",
      "&:hover": {
        borderBottom: `2px solid ${theme.palette.common.black}`,
      },
    },
  },
  social: {
    "& a": {
      marginLeft: "7px",
      border: `1px solid ${theme.palette.common.white}`,
      padding: "5px 7px",
      textAlign: "center",
      background: theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius,
      width: "30px",
      height: "30px",
      fontSize: "14px",
    },
    "& a:hover": {
      background: theme.palette.common.white,
      "& i": {
        color: theme.palette.primary.main,
      },
    },
    "& i": {
      color: theme.palette.common.white,
    },
  },
  active: {
    borderBottom: `2px solid ${theme.palette.common.black}`,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <header>
      <div className={classes.root}>
        <Container fixed>
          <Box className={classes.topNav__content}>
            <div className={classes.topNav__contact}>
              <p>
                <i className="fas fa-envelope"></i>
                <span className={classes.text}>info@email.com</span>
              </p>
              <p>
                <i className="fas fa-phone-alt"></i>
                <span className={classes.text}>+012 345 6789</span>
              </p>
            </div>
            <div className={classes.tab__menu}>
              <Link to="/">
                <span>About</span> &nbsp;/
              </Link>
              <Link to="/">
                <span>Privacy</span> &nbsp;/
              </Link>
              <Link to="/">
                <span>Terms</span> &nbsp;/
              </Link>
              <Link to="/contact">
                <span>Contact</span>
              </Link>
            </div>
          </Box>
        </Container>
      </div>
      <Container>
        <Box>
          <Grid
            container
            fullWidth
            spacing={{ md: 4, xs: 2 }}
            className={classes.searchBar}
          >
            <Grid item>
              <img src={logo} alt="NewsApp logo" className={classes.logo} />
            </Grid>
            <Grid item>
              <img src={advertisement} alt="Advertisement" />
            </Grid>
            <Grid item>
              <FormControl
                sx={{
                  "& .MuiOutlinedInput-root": {
                    paddingRight: 0,
                    justifyContent: "space-between",
                  },
                }}
              >
                <OutlinedInput
                  endAdornment={
                    <InputAdornment position="end">
                      <button className={classes.btn}>
                        <i className="fa fa-search fa-lg"></i>
                      </button>
                    </InputAdornment>
                  }
                  sx={{
                    "& .MuiOutlinedInput-input": {
                      padding: "0 15px",
                      height: "50px",
                    },
                  }}
                  placeholder="Search"
                  classes={classes.search}
                  inputProps={{ type: "text" }}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <AppBar position="sticky" className={classes.appBar}>
        <Container
          sx={{
            "& .MuiToolbar-root": {
              height: "45px",
              minHeight: "45px",
            },
          }}
        >
          <Toolbar disableGutters>
            <div className={classes.navigation}>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                HOME
              </NavLink>
              <NavLink
                to="/business"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                BUSINESS
              </NavLink>
              <NavLink
                to="/politics"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                POLITICS
              </NavLink>
              <NavLink
                to="/lifestyle"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                LIFESTYLE
              </NavLink>
              <NavLink
                to="/sports"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                SPORTS
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                CONTACT US
              </NavLink>
              <NavLink
                to="/login_registration"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                LOGIN
              </NavLink>
            </div>
            <div className={classes.social}>
              <Link to="/">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-facebook-f" style={{ width: "15px" }}></i>
              </Link>
              <Link to="/">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <div id="back-to-top-anchor" />
    </header>
  );
};

export default Navbar;
