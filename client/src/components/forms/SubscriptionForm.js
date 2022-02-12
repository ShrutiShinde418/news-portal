import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Input from "../Input";
import SubmitButton from "../SubmitButton";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

const newsFrequency = ["Daily", "Weekly", "Monthly"];

const subscriptionCategories = [
  "Travel",
  "Food",
  "Technology",
  "Lifestyle",
  "Video",
  "World",
  "Science",
  "Weekly News",
  "Politics",
];

const SubscriptionForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [newsNo, setNewsNo] = useState("");
  const [frequency, setFrequency] = useState("");
  const [categories, setCategories] = useState([]);

  const nameChangeHandler = (e) => setName(e.target.value);
  const phoneChangeHandler = (e) => setPhone(e.target.value);
  const emailChangeHandler = (e) => setEmail(e.target.value);
  const numberChangeHandler = (e) => setNewsNo(e.target.value);
  const frequencyChangeHandler = (e) => setFrequency(e.target.value);
  const categoryChangeHandler = (e) => {
    setCategories((prevState) => {
      return [...prevState, e.target.name];
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/api/subscription/add-subscriber",
        {
          name: name,
          email: email,
          phone: phone,
          frequency: frequency,
          numberOfNews: +newsNo,
          category: categories,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        dispatch(authActions.successHandler(res.data.message));
      })
      .catch((err) => {
        dispatch(authActions.errorHandler(err.response.data.error));
      });
  };

  const error = categories.length === 0;

  return (
    <Box component="form" sx={{ mt: 1 }} onSubmit={submitHandler}>
      <Input
        sx={{ marginBottom: "1.5rem" }}
        placeholder="Name *"
        minRows={false}
        maxRows={false}
        multiline={false}
        type="text"
        value={name}
        onChange={nameChangeHandler}
      />
      <Input
        sx={{ marginBottom: "1.5rem" }}
        placeholder="Email *"
        type="email"
        minRows={false}
        maxRows={false}
        multiline={false}
        value={email}
        onChange={emailChangeHandler}
      />
      <Input
        placeholder="Phone *"
        sx={{ marginBottom: "1.5rem" }}
        type="text"
        minRows={false}
        maxRows={false}
        multiline={false}
        value={phone}
        onChange={phoneChangeHandler}
      />
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ marginBottom: "1rem" }}
      >
        <FormLabel component="legend">Pick at least one</FormLabel>
        <FormGroup>
          {subscriptionCategories.map((category) => (
            <FormControlLabel
              control={<Checkbox name={category} />}
              label={category}
              key={category}
              onChange={categoryChangeHandler}
            />
          ))}
        </FormGroup>
      </FormControl>
      <FormControl sx={{ marginBottom: "1.5rem" }} fullWidth required>
        <Select
          value={frequency}
          onChange={frequencyChangeHandler}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ height: "48px", color: "#D6D6D6" }}
        >
          <MenuItem value="">
            <p style={{ margin: 0, color: "#D6D6D6" }}>Frequency *</p>
          </MenuItem>
          {newsFrequency.map((item) => {
            return (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Input
        placeholder="Number of News *"
        sx={{ marginBottom: "1.5rem" }}
        type="text"
        minRows={false}
        maxRows={false}
        multiline={false}
        value={newsNo}
        onChange={numberChangeHandler}
      />
      <SubmitButton title="Submit" />
    </Box>
  );
};

export default SubscriptionForm;
