import React, { useState } from "react";
import SubmitButton from "../SubmitButton";
import axios from "axios";
import Input from "../Input";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const nameChangeHandler = (e) => {
    setFullName(e.target.value);
  };
  const registerEmailChangeHandler = (e) => {
    setRegisterEmail(e.target.value);
  };

  const registerPasswordChangeHandler = (e) => {
    setRegisterPassword(e.target.value);
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    console.log(fullName);
    axios
      .post("http://localhost:5000/api/auth/register", {
        fullName: fullName,
        email: registerEmail,
        password: registerPassword,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        dispatch(authActions.errorHandler(err.response.data.error));
      });
  };
  return (
    <form onSubmit={registerHandler} name="registerForm">
      <Input
        sx={{ marginBottom: "1.5rem" }}
        placeholder="Full Name *"
        value={fullName}
        type="text"
        minRows={false}
        maxRows={false}
        multiline={false}
        onChange={nameChangeHandler}
      />
      <Input
        sx={{ marginBottom: "1.5rem" }}
        placeholder="Email *"
        type="email"
        value={registerEmail}
        minRows={false}
        maxRows={false}
        multiline={false}
        onChange={registerEmailChangeHandler}
      />
      <Input
        placeholder="Password *"
        type="password"
        minRows={false}
        maxRows={false}
        onChange={registerPasswordChangeHandler}
        value={registerPassword}
        multiline={false}
      />
      <SubmitButton title="Registration" />
    </form>
  );
};

export default RegistrationForm;
