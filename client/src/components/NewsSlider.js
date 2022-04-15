import React, { Fragment } from "react";
import { Typography, Grid, IconButton, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import NewsItem from "./NewsItem";
import news7 from "../assets/news-7.jpg";
import news6 from "../assets/news-6.jpg";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .MuiIconButton-root": {
      borderRadius: 4,
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 15,
      marginRight: 15,
      transition: "0.5s",
      padding: "7px 10px",
      "&:hover": { backgroundColor: theme.palette.primary.main },
      "&:last-of-type": { marginRight: 0 },
    },
  },
  heading: {
    color: theme.palette.common.black,
    width: "100%",
  },
}));

const Item = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <NewsItem title="Lorem ipsum dolor sit" src={news6} />
      </Grid>
      <Grid item xs={6}>
        <NewsItem title="Lorem ipsum dolor sit" src={news7} />
      </Grid>
    </Grid>
  );
};

const Left = () => {
  return (
    <IconButton aria-label="delete">
      <i className="fa fa-chevron-left"></i>
    </IconButton>
  );
};
const Right = () => {
  return (
    <IconButton aria-label="delete">
      <i className="fa fa-chevron-right"></i>
    </IconButton>
  );
};

const items = [
  {
    name: "Lorem ipsum dolor sit",
    image: news6,
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Lorem ipsum dolor sit",
    description: "Hello World!",
    image: news7,
  },
];

const buttonClick = (next, prev) => {
  console.log(next, prev);
};

const NewsSlider = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        container
        className={classes.root}
        sx={{
          paddingBottom: "15px",
          borderBottom: `3px double ${theme.palette.common.black}`,
        }}
      >
        <Grid item>
          <Typography
            component="h1"
            variant="h4"
            className={classes.heading}
            sx={{ marginBottom: "0px", fontWeight: 600, fontSize: "2rem" }}
          >
            Sports
          </Typography>
        </Grid>
        <Grid item>
          <IconButton aria-label="delete">
            <i className="fa fa-chevron-left"></i>
          </IconButton>
          <IconButton aria-label="delete">
            <i className="fa fa-chevron-right"></i>
          </IconButton>
        </Grid>
      </Grid>
      <Carousel
        indicators={false}
        animation="slide"
        autoPlay={false}
        height={345}
        sx={{ width: 560, paddingTop: 4 }}
        className={classes.root}
        NavButton={({ onClick, className, style, next, prev }) => {
          return (
            <Button
              onClick={buttonClick(next, prev)}
              className={className}
              style={style}
            >
              {next && <Right />}
              {prev && <Left />}
            </Button>
          );
        }}
      >
        {items.map((item, i) => (
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <NewsItem title="Lorem ipsum dolor sit" src={news6} />
            </Grid>
            <Grid item xs={6}>
              <NewsItem title="Lorem ipsum dolor sit" src={news7} />
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </Fragment>
  );
};

export default NewsSlider;
