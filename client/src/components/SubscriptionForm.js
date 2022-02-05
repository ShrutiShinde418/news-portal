import React, { useState } from "react";
import {
  Box,
  Grid,
  FormControl,
  OutlinedInput,
  Select,
  MenuItem,
  Typography,
  InputLabel,
  FormGroup,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiButton-contained": {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      textTransform: "none",
      fontSize: "16px",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
    "& .MuiTypography-h5": {
      marginBottom: "1rem",
      fontWeight: theme.typography.fontWeightBold,
    },
    "& .MuiOutlinedInput-input": {
      height: "15px",
      color: "#999999",
    },
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const SubscriptionForm = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [newsNo, setNewsNo] = useState("");
  const [frequency, setFrequency] = useState("");

  const nameChangeHandler = (e) => setName(e.target.value);
  const phoneChangeHandler = (e) => setPhone(e.target.value);
  const emailChangeHandler = (e) => setEmail(e.target.value);
  const numberChangeHandler = (e) => setNewsNo(e.target.value);
  const frequencyChangeHandler = (e) => {
    setFrequency(e.target.value);
    console.log(frequency);
  };

  const newsFrequency = ["Daily", "Weekly", "Monthly"];

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={8} md={5}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Subscribe
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <FormControl fullWidth sx={{ marginBottom: "1.5rem" }}>
              <OutlinedInput
                placeholder="Name *"
                required
                type="text"
                value={name}
                onChange={nameChangeHandler}
              />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: "1.5rem" }}>
              <OutlinedInput
                placeholder="Email *"
                required
                type="email"
                value={email}
                onChange={emailChangeHandler}
              />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: "1.5rem" }}>
              <OutlinedInput
                placeholder="Phone *"
                required
                type="tel"
                value={phone}
                onChange={phoneChangeHandler}
              />
            </FormControl>
            <FormControl sx={{ marginBottom: "1.5rem" }} fullWidth required>
              <Select
                value={frequency}
                onChange={frequencyChangeHandler}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <p style={{ margin: 0 }}>Frequency *</p>
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
            <FormControl fullWidth sx={{ marginBottom: "1.5rem" }}>
              <OutlinedInput
                placeholder="Number of News *"
                required
                type="number"
                value={newsNo}
                onChange={numberChangeHandler}
              />
            </FormControl>
            <Button
              variant="contained"
              style={{ marginTop: "15px" }}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SubscriptionForm;
