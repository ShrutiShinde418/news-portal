import React, { useState } from "react";
import axios from "axios";
import Input from "../Input";
import SubmitButton from "../SubmitButton";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginEmailChangeHandler = (e) => {
    setLoginEmail(e.target.value);
  };
  const loginPasswordChangeHandler = (e) => {
    setLoginPassword(e.target.value);
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
        alert(err.response.data.error);
        console.log(err.response);
      });
  };
  return (
    <form onSubmit={loginHandler} name="loginForm">
      <Input
        sx={{ marginBottom: "1.5rem" }}
        placeholder="Email *"
        value={loginEmail}
        minRows={false}
        maxRows={false}
        type="email"
        multiline={false}
        onChange={loginEmailChangeHandler}
      />
      <Input
        placeholder="Password *"
        value={loginPassword}
        type="password"
        multiline={false}
        minRows={false}
        maxRows={false}
        onChange={loginPasswordChangeHandler}
      />
      <SubmitButton title="Login" />
    </form>
  );
};

export default LoginForm;
