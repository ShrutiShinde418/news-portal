import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Container,
  FormControl,
  OutlinedInput,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
    "& .MuiTypography-body1": {
      color: theme.palette.common.black,
      fontSize: "16px",
      marginBottom: "10px",
    },
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
  description: {
    marginBottom: "15px",
    fontSize: "16px",
  },
  social: {
    marginTop: "2rem",
    "& a": {
      margin: "10px 15px 0 0",
      padding: "9px",
      textAlign: "center",
      background: theme.palette.common.white,
      borderRadius: "4px",
      width: "40px",
      height: "40px",
      fontSize: "14px",
      border: `1px solid ${theme.palette.common.black}`,
    },
    "& a:first-of-type": { marginLeft: 0 },
    "& a:hover": {
      background: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      "& i": {
        color: theme.palette.common.white,
      },
    },
    "& i": {
      color: theme.palette.common.black,
    },
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography
        component="h1"
        variant="h6"
        className={classes.pagination}
        sx={{ marginBottom: "25px" }}
      >
        <Link to="/">Home</Link> &nbsp;/&nbsp; Contact
      </Typography>
      <Grid container spacing={4}>
        <Grid item md={8}>
          <form>
            <Grid container spacing={2}>
              <Grid item md={6} sx={{ marginBottom: "1rem" }}>
                <FormControl fullWidth>
                  <OutlinedInput placeholder="Your Name" required type="text" />
                </FormControl>
              </Grid>
              <Grid item md={6} sx={{ marginBottom: "1rem" }}>
                <FormControl fullWidth>
                  <OutlinedInput
                    placeholder="Your Email"
                    required
                    type="email"
                  />
                </FormControl>
              </Grid>
              <Grid item md={12}>
                <FormControl fullWidth>
                  <OutlinedInput placeholder="Subject" required type="text" />
                </FormControl>
              </Grid>
              <Grid item md={12}>
                <FormControl fullWidth>
                  <OutlinedInput
                    placeholder="Message"
                    multiline
                    minRows={5}
                    maxRows={5}
                    required
                    type="text"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Button variant="contained" style={{ marginTop: "15px" }}>
              Send Message
            </Button>
          </form>
        </Grid>
        <Grid item md={4}>
          <Typography
            component="h2"
            variant="h4"
            sx={{
              marginBottom: "15px",
              fontWeight: "bold",
              fontSize: "28px",
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            component="h3"
            variant="subtitle1"
            sx={{
              marginBottom: "15px",
              fontSize: "16px",
              lineHeight: 1.5,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            condimentum quam ac mi viverra dictum. In efficitur ipsum diam, at
            dignissim lorem tempor in. Vivamus tempor hendrerit finibus.
          </Typography>
          <Typography component="h2" variant="body1">
            <i className="fa fa-map-marker"></i>&nbsp;123 News Street, NY, USA
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactForm;
