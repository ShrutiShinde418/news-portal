import React, { Fragment } from "react";
import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import img1 from "../assets/news-1.jpg";
import img2 from "../assets/news-2.jpg";
import img3 from "../assets/news-3.jpg";
import img4 from "../assets/news-4.jpg";
import img5 from "../assets/news-5.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    "& a": {
      fontFamily: theme.typography.fontFamily,
      fontSize: "17px",
      textDecoration: "none",
      lineHeight: 1.5,
      color: theme.palette.common.black,
      transition: "all 0.3s",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  },
  heading: {
    color: theme.palette.common.black,
    paddingBottom: "15px",
    borderBottom: `3px double ${theme.palette.common.black}`,
  },
  imgFluid: {
    height: "auto",
    width: "100%",
  },
}));

const news = [
  {
    id: 1,
    image: img1,
    headline: "Lorem ipsum dolor sit amet consec adipis elit",
  },
  {
    id: 2,
    image: img2,
    headline: "Lorem ipsum dolor sit amet consec adipis elit",
  },
  {
    id: 3,
    image: img3,
    headline: "Lorem ipsum dolor sit amet consec adipis elit",
  },
  {
    id: 4,
    image: img4,
    headline: "Lorem ipsum dolor sit amet consec adipis elit",
  },
  {
    id: 5,
    image: img5,
    headline: "Lorem ipsum dolor sit amet consec adipis elit",
  },
];

const InThisCategory = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        component="h1"
        variant="h4"
        className={classes.heading}
        sx={{ marginBottom: "30px", fontWeight: 600, fontSize: "2rem" }}
      >
        In This Category
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {news.map((newsItem) => {
          return (
            <Fragment>
              <Grid item key={newsItem.id} md={4}>
                <img src={newsItem.image} className={classes.imgFluid} />
              </Grid>
              <Grid item md={8}>
                <Link to="/">{newsItem.headline}</Link>
              </Grid>
            </Fragment>
          );
        })}
      </Grid>
    </div>
  );
};

export default InThisCategory;
