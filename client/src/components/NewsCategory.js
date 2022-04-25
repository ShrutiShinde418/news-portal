import React from "react";
import { Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.common.black,
    paddingBottom: "15px",
    borderBottom: `3px double ${theme.palette.common.black}`,
  },
  categoryList: {
    paddingLeft: 0,
    listStyleType: "none",
    fontFamily: theme.typography.fontFamily,
    "& li": {
      margin: "0 0 12px 22px",
      lineHeight: 1.8,
    },
    "& .MuiGrid-root": {
      "& .MuiGrid-grid-md-11": {
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: 0,
        "& a": {
          textDecoration: "none",
          color: theme.palette.common.black,
          transition: "0.5s",
          "&:hover": {
            color: theme.palette.primary.main,
          },
        },
      },
      "& .MuiGrid-grid-md-1": { paddingLeft: 0 },
    },
  },
}));

export const categories = [
  {
    id: 1,
    title: "National",
    no: 98,
  },
  {
    id: 2,
    title: "International",
    no: 87,
  },
  {
    id: 3,
    title: "Economics",
    no: 76,
  },
  {
    id: 4,
    title: "Politics",
    no: 65,
  },
  {
    id: 5,
    title: "Lifestyle",
    no: 54,
  },
  {
    id: 6,
    title: "Technology",
    no: 43,
  },
  {
    id: 7,
    title: "Trades",
    no: 32,
  },
];

const NewsCategory = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        variant="h4"
        component="h1"
        className={classes.heading}
        sx={{ marginBottom: "30px", fontWeight: 600, fontSize: "2rem" }}
      >
        News Category
      </Typography>
      <ul className={classes.categoryList}>
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <Grid container spacing={2}>
                <Grid item md={1} sx={{ paddingLeft: 0 }}>
                  <i className="fas fa-arrow-right"></i>
                </Grid>
                <Grid item md={11}>
                  <Link to="/">{category.title}</Link>
                  <span>({category.no})</span>
                </Grid>
              </Grid>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewsCategory;
