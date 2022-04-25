import React from "react";
import Carousel from "react-material-ui-carousel";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NewsItem from "./NewsItem";
import news6 from "../assets/news-6.jpg";
import news7 from "../assets/news-7.jpg";

const Item = (props) => {
  return (
    <NewsItem>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <Button>Check it out!</Button>
    </NewsItem>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiIconButton-root": {
      borderRadius: 4,
      backgroundColor: theme.palette.common.black,
      padding: 2,
    },
  },
}));

const Slider = (props) => {
  const classes = useStyles();
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

  return (
    <Carousel
      indicators={false}
      animation="slide"
      height={345}
      sx={{ width: 540 }}
      navButtonsAlwaysVisible
      className={classes.root}
    >
      {items.map((item, i) => (
        <NewsItem
          key={i}
          src={item.image}
          title={item.name}
          fontWeight={600}
          fontSize={30}
        />
      ))}
    </Carousel>
  );
};

export default Slider;
