import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  imgFluid: {
    height: "auto",
    width: "100%",
    verticalAlign: "middle",
    borderStyle: "none",
    transtion: "0.5s",
  },
  title: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: "15px 10px 15px 20px",
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, .0), rgba(0, 0, 0, .3), rgba(0, 0, 0, .9))",
    display: "flex",
    alignItems: "flex-end",
    "& a": {
      color: theme.palette.common.white,
      fontSize: (props) => (props.fontSize ? props.fontSize : 18),
      textDecoration: "none",
      fontFamily: theme.typography.fontFamily,
      fontWeight: (props) => (props.fontWeight ? props.fontWeight : 400),
      transition: "0.3s",
      "&:hover": { color: theme.palette.primary.main },
    },
  },
  img: {
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      "& img": {
        filter: "blur(3px)",
      },
    },
  },
}));

const NewsItem = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.img}>
      <img src={props.src} className={classes.imgFluid} alt="Lorem Ipsum" />
      <div className={classes.title}>
        <Link to="#">{props.title}</Link>
      </div>
    </div>
  );
};

export default NewsItem;
