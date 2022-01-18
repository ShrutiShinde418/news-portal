import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  backToTop: {
    position: "fixed",
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    width: "35px",
    height: "35px",
    textAlign: "center",
    lineHeight: 1,
    fontSize: "16px",
    right: "15px",
    left: "95vw",
    bottom: "15px",
    transition: "background 0.5s",
    borderRadius: "4px",
    zIndex: 11,
    "&:hover": {
      background: theme.palette.common.black,
    },
    "& i": {
      paddingTop: "10px",
    },
  },
}));

const BackToTop = () => {
  const classes = useStyles();
  return (
    <a href="#" className={classes.backToTop}>
      <i className="fa fa-chevron-up"></i>
    </a>
  );
};

export default BackToTop;
