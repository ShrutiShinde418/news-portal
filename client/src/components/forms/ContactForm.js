import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Grid, Typography, Container, Button } from "@mui/material";
import SocialInfo from "../SocialInfo";
import { makeStyles } from "@mui/styles";
import SubmitButton from "../SubmitButton";
import Input from "../Input";

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
      borderRadius: theme.shape.borderRadius,
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const subjectChangeHandler = (e) => {
    setSubject(e.target.value);
  };

  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/contact/new-message", {
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err.response);
        console.log(err.response);
      });
  };

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
          <form onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Grid item md={6} sx={{ marginBottom: "1rem" }}>
                <Input
                  placeholder="Your Name *"
                  type="text"
                  minRows={false}
                  maxRows={false}
                  multiline={false}
                  value={name}
                  onChange={nameChangeHandler}
                />
              </Grid>
              <Grid item md={6} sx={{ marginBottom: "1rem" }}>
                <Input
                  placeholder="Your Email *"
                  type="email"
                  minRows={false}
                  maxRows={false}
                  multiline={false}
                  value={email}
                  onChange={emailChangeHandler}
                />
              </Grid>
              <Grid item md={12}>
                <Input
                  placeholder="Subject *"
                  type="text"
                  minRows={false}
                  maxRows={false}
                  multiline={false}
                  value={subject}
                  onChange={subjectChangeHandler}
                />
              </Grid>
              <Grid item md={12}>
                <Input
                  placeholder="Message *"
                  multiline={true}
                  minRows={5}
                  maxRows={5}
                  type="text"
                  value={message}
                  onChange={messageChangeHandler}
                />
              </Grid>
            </Grid>
            <SubmitButton title="Send Message" />
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
          <SocialInfo styles={classes.social} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactForm;
