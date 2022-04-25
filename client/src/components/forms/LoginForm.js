import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Input from "../Input";
import SubmitButton from "../SubmitButton";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
        dispatch(authActions.errorHandler(err.response.data.error));
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
