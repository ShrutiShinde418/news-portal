import React from "react";
import {
  Container,
  Grid,
  Typography,
  OutlinedInput,
  FormControl,
  InputAdornment,
} from "@mui/material";
import SocialInfo from "./SocialInfo";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#111111",
    marginTop: "5rem",
    "& .MuiTypography-h4": {
      fontSize: "27px",
      marginBottom: "25px",
    },
    "& .MuiTypography-body1": {
      color: theme.palette.common.white,
      fontSize: "16px",
      marginBottom: "10px",
    },
  },
  title: {
    color: theme.palette.common.white,
    letterSpacing: "1px",
    paddingBottom: "10px",
    borderBottom: `3px double ${theme.palette.common.white}`,
  },
  social: {
    marginTop: "1.8rem",
    "& a": {
      marginLeft: "7px",
      padding: "9px",
      textAlign: "center",
      background: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
      width: "35px",
      height: "35px",
      fontSize: "14px",
      "&:hover": {
        background: theme.palette.primary.main,
        "& i": {
          color: theme.palette.common.white,
        },
      },
    },
    "& a:first-of-type": { marginLeft: 0 },
    "& i": {
      color: theme.palette.common.black,
    },
  },
  links: {
    listStyleType: "none",
    paddingLeft: 0,
    "& li": {
      lineHeight: 2.2,
    },
    "& li a": {
      color: theme.palette.common.white,
      fontSize: "16px",
      textDecoration: "none",
      fontFamily: theme.typography.fontFamily,
      transition: "0.5s",
      "&:hover": {
        color: theme.palette.primary.main,
        paddingLeft: "10px",
      },
    },
    "& li a i": {
      paddingRight: "5px",
      fontWeight: 900,
    },
    "& li a:first-of-type": {
      lineHeight: 0,
    },
  },
  btn: {
    width: "80px",
    height: "35px",
    background: "#111111",
    color: theme.palette.common.white,
    fontSize: "14px",
    border: `1px solid ${theme.palette.common.white}`,
    borderRadius: "0 4px 4px 0",
    fontFamily: theme.typography.fontFamily,
    "&:hover": {
      border: `1px solid ${theme.palette.common.white}`,
      background: theme.palette.primary.main,
    },
  },
  footerMenu: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px 0",
    borderTop: `1px solid ${theme.palette.common.black}`,
    marginTop: "0.75rem",
    "& a": {
      color: theme.palette.common.white,
      fontSize: 14,
      marginRight: 15,
      paddingRight: 15,
      marginTop: 5,
      marginBottom: 5,
      borderRight: `1px solid ${theme.palette.common.white}`,
      textDecoration: "none",
      fontFamily: theme.typography.fontFamily,
      transition: "0.5s",
      "&:hover": {
        color: theme.palette.primary.main,
      },
      "&:last-of-type": {
        borderRight: "none",
      },
    },
    [theme.breakpoints.down("790")]: {
      flexWrap: "wrap",
    },
  },
  bottom: {
    background: theme.palette.common.black,
    padding: "25px 0",
    "& .MuiContainer-root": {
      display: "flex",
      justifyContent: "space-between",
    },
    color: theme.palette.common.white,
    "& h5 a": {
      textDecoration: "none",
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightBold,
      "&:hover": {
        color: theme.palette.common.white,
      },
    },
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <div className={classes.root}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={3} sm={6}>
              <Typography component="h1" variant="h4" className={classes.title}>
                Get in Touch
              </Typography>
              <div>
                <Typography component="h2" variant="body1">
                  <i className="fa fa-map-marker"></i>&nbsp;123 News Street, NY,
                  USA
                </Typography>
                <Typography component="h2" variant="body1">
                  <i className="fa fa-envelope"></i>&nbsp;info@example.com
                </Typography>
                <Typography>
                  <i className="fa fa-phone"></i>&nbsp;+123-456-7890
                </Typography>
                <SocialInfo styles={classes.social} />
              </div>
            </Grid>
            <Grid item xs={12} lg={3} sm={6}>
              <Typography component="h1" variant="h4" className={classes.title}>
                Useful Links
              </Typography>
              <ul className={classes.links}>
                <li>
                  <Link to="#">
                    <i className="fas fa-arrow-right"></i>Lorem ipsum
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-arrow-right"></i>Pellentesque
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-arrow-right"></i>Aenean vulputate
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-arrow-right"></i>Vestibulum sit amet
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-arrow-right"></i>Nam dignissim
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} lg={3} sm={6}>
              <Typography component="h1" variant="h4" className={classes.title}>
                Quick Links
              </Typography>
              <ul className={classes.links}>
                <li>
                  <Link to="#">
                    <i className="fas fa-arrow-right"></i>Lorem ipsum
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-arrow-right"></i>Pellentesque
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-arrow-right"></i>Aenean vulputate
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-arrow-right"></i>Vestibulum sit amet
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-arrow-right"></i>Nam dignissim
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} lg={3} sm={6}>
              <Typography component="h1" variant="h4" className={classes.title}>
                Newsletter
              </Typography>
              <div className="newsletter">
                <Typography
                  variant="body1"
                  component="h2"
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus sed porta dui. Class aptent taciti sociosqu
                </Typography>
                <FormControl
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      paddingRight: 0,
                      justifyContent: "space-between",
                      backgroundColor: "#FFF",
                      height: "35px",
                      borderRadius: "4px",
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      border: "1px solid #FFF",
                    },
                  }}
                  fullWidth
                >
                  <OutlinedInput
                    endAdornment={
                      <InputAdornment position="end">
                        <button className={classes.btn}>Submit</button>
                      </InputAdornment>
                    }
                    placeholder="Your email here"
                    inputProps={{ type: "email" }}
                  />
                </FormControl>
              </div>
            </Grid>
          </Grid>
          <div className={classes.footerMenu}>
            <Link to="/">Terms of use</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Cookies</Link>
            <Link to="/">Accessibility Help</Link>
            <Link to="/">Advertise with us</Link>
            <Link to="/contact">Contact us</Link>
          </div>
        </Container>
      </div>
      <div className={classes.bottom}>
        <Container>
          <Typography component="h4">
            Copyright &copy; All Rights Reserved
          </Typography>
          <Typography component="h5">
            Made by&nbsp;
            <a href="https://github.com/ShrutiShinde418" target="_blank">
              Shruti Shinde &nbsp;
            </a>
            and&nbsp;
            <a href="https://github.com/Durgvanshi" target="_blank">
              Aryan Singh
            </a>
          </Typography>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
