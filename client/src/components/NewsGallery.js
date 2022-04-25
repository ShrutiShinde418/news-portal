import React from "react";
import { Grid, Box } from "@mui/material";
import news1 from "../assets/news-1.jpg";
import news2 from "../assets/news-2.jpg";
import news3 from "../assets/news-3.jpg";
import news4 from "../assets/news-4.jpg";
import news5 from "../assets/news-5.jpg";
import NewsItem from "./NewsItem";

const NewsGallery = () => {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item md={4}>
          <NewsItem title="Lorem ipsum dolor sit" src={news1} />
        </Grid>
        <Grid item md={4}>
          <NewsItem title="Lorem ipsum dolor sit" src={news2} />
        </Grid>
        <Grid item md={4}>
          <NewsItem title="Lorem ipsum dolor sit" src={news3} />
        </Grid>
        <Grid item md={4}>
          <NewsItem title="Lorem ipsum dolor sit" src={news4} />
        </Grid>
        <Grid item md={4}>
          <NewsItem title="Lorem ipsum dolor sit" src={news5} />
        </Grid>
        <Grid item md={4}>
          <NewsItem title="Lorem ipsum dolor sit" src={news1} />
        </Grid>
        <Grid item md={4}>
          <NewsItem title="Lorem ipsum dolor sit" src={news2} />
        </Grid>
        <Grid item md={4}>
          <NewsItem title="Lorem ipsum dolor sit" src={news3} />
        </Grid>
        <Grid item md={4}>
          <NewsItem title="Lorem ipsum dolor sit" src={news4} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsGallery;
