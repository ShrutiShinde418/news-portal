import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";

const useStyles = makeStyles((theme) => ({
  "& .MuiButton-contained": {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textTransform: "none",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  btn: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textTransform: "none",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const SubmitButton = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      style={{ marginTop: "15px" }}
      type="submit"
      className={classes.btn}
      sx={{
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        textTransform: "none",
        fontSize: "16px",
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
        },
      }}
    >
      {props.title}
    </Button>
  );
};

export default SubmitButton;
