import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  const navigate = useNavigate();
  const classes = useStyles();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const loginEmailChangeHandler = (e) => {
    setLoginEmail(e.target.value);
  };
  const loginPasswordChangeHandler = (e) => {
    setLoginPassword(e.target.value);
  };

  const nameChangeHandler = (e) => {
    setFullName(e.target.value);
  };
  const registerEmailChangeHandler = (e) => {
    setRegisterEmail(e.target.value);
  };

  const registerPasswordChangeHandler = (e) => {
    setRegisterPassword(e.target.value);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/api/auth/login",
        {
          email: loginEmail,
          password: loginPassword,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000", {
        fullName: fullName,
        email: registerEmail,
        password: registerPassword,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err.error);
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
        <Link to="/">Home</Link> &nbsp;/&nbsp; Registration or Login
      </Typography>
      <Grid container spacing={5}>
        <Grid item md={6}>
          <Typography variant="h5" component="h2">
            Login
          </Typography>
          <form onSubmit={loginHandler} name="loginForm">
            <FormControl fullWidth sx={{ marginBottom: "1.5rem" }}>
              <OutlinedInput
                placeholder="Email *"
                required
                value={loginEmail}
                type="email"
                onChange={loginEmailChangeHandler}
              />
            </FormControl>
            <FormControl fullWidth>
              <OutlinedInput
                placeholder="Password *"
                required
                value={loginPassword}
                type="password"
                onChange={loginPasswordChangeHandler}
              />
            </FormControl>
            <Button
              variant="contained"
              style={{ marginTop: "15px" }}
              type="submit"
            >
              Login
            </Button>
          </form>
        </Grid>
        <Grid item md={6}>
          <Typography variant="h5" component="h2">
            Register
          </Typography>
          <form onSubmit={registerHandler} name="registerForm">
            <FormControl fullWidth sx={{ marginBottom: "1.5rem" }}>
              <OutlinedInput
                placeholder="Full Name *"
                required
                type="text"
                value={fullName}
                onChange={nameChangeHandler}
              />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: "1.5rem" }}>
              <OutlinedInput
                placeholder="Email *"
                required
                type="email"
                value={registerEmail}
                onChange={registerEmailChangeHandler}
              />
            </FormControl>
            <FormControl fullWidth>
              <OutlinedInput
                placeholder="Password *"
                required
                type="password"
                onChange={registerPasswordChangeHandler}
                value={registerPassword}
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
