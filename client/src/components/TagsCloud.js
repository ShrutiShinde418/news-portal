import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { categories } from "./NewsCategory";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.common.black,
    paddingBottom: "15px",
    borderBottom: `3px double ${theme.palette.common.black}`,
  },
  tags: {
    "& a": {
      border: `1px solid ${theme.palette.common.black}`,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      margin: "3px",
      padding: "8px 10px",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
      fontFamily: theme.typography.fontFamily,
      transition: "0.5s",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        border: `1px solid ${theme.palette.primary.main}`,
      },
    },
  },
}));

const TagsCloud = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography
        component="h1"
        variant="h4"
        className={classes.heading}
        sx={{ marginBottom: "30px", fontWeight: 600, fontSize: "2rem" }}
      >
        Tags Cloud
      </Typography>
      <div className={classes.tags}>
        {categories.map((category) => {
          return <Link to="/" key={category.id}>{category.title}</Link>;
        })}
      </div>
    </div>
  );
};

export default TagsCloud;
