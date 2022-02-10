import React from "react";
import { Grid, Box } from "@mui/material";
import news1 from "../assets/news-1.jpg";
import news2 from "../assets/news-2.jpg";
import news3 from "../assets/news-3.jpg";
import news4 from "../assets/news-4.jpg";
import NewsItem from "./NewsItem";


const TopNews = () => {
  return (
    <Box sx={{ width: 540, marginTop: 5 }}>
      <Grid container>
        <Grid item md={6}>
          <NewsItem src={news1} title="Lorem ipsum dolor sit" />
        </Grid>
        <Grid item md={6}>
          <NewsItem src={news2} title="Lorem ipsum dolor sit" />
        </Grid>
        <Grid item md={6}>
          <NewsItem src={news3} title="Lorem ipsum dolor sit" />
        </Grid>
        <Grid item md={6}>
          <NewsItem src={news4} title="Lorem ipsum dolor sit" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopNews;
