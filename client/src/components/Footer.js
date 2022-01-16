import React from "react";
import {
  Container,
  Grid,
  Typography,
  OutlinedInput,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#111111",
    marginTop: "5rem",
    paddingBottom: "2rem",
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
    marginTop: "1rem",
    "& a": {
      marginLeft: "7px",
      padding: "9px",
      textAlign: "center",
      background: theme.palette.common.white,
      borderRadius: "4px",
      width: "35px",
      height: "35px",
      fontSize: "14px",
    },
    "& a:first-of-type": { marginLeft: 0 },
    "& a:hover": {
      background: theme.palette.primary.main,
      "& i": {
        color: theme.palette.common.white,
      },
    },
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
    },
    "& li a:hover": {
      color: theme.palette.primary.main,
      paddingLeft: "10px",
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
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={6} lg={3}>
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
              <div className={classes.social}>
                <Link to="#">
                  <i className="fab fa-twitter fa-lg"></i>
                </Link>
                <Link to="#">
                  <i
                    className="fab fa-facebook-f fa-lg"
                    style={{ width: "20px" }}
                  ></i>
                </Link>
                <Link to="#">
                  <i
                    className="fab fa-linkedin-in fa-lg"
                    style={{ width: "20px" }}
                  ></i>
                </Link>
                <Link to="#">
                  <i
                    className="fab fa-instagram fa-lg"
                    style={{ width: "22px" }}
                  ></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-youtube fa-lg"></i>
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item md={6} lg={3}>
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
          <Grid item md={6} lg={3}>
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
          <Grid item md={6} lg={3}>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                sed porta dui. Class aptent taciti sociosqu
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
                  "& .MuiOutlinedInput-root:hover":{
                    border:"1px solid #FFF",
                  }
                }}
              >
                <OutlinedInput
                  endAdornment={
                    <InputAdornment position="end">
                      <button className={classes.btn}>Submit</button>
                    </InputAdornment>
                  }
                  placeholder="Your email here"
                />
              </FormControl>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
