import React, { Fragment } from "react";
import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.common.black,
    paddingBottom: "15px",
    borderBottom: `3px double ${theme.palette.common.black}`,
  },
  newsLinks: {
    listStyleType: "none",
    paddingLeft: 0,
    "& a": {
      color: theme.palette.common.black,
      textDecoration: "none",
      fontFamily: theme.typography.fontFamily,
      fontSize: "18px",
      lineHeight: 2,
      transition: "0.5s",
    },
    "& .MuiGrid-grid-md-11": {
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  },
}));

const links = [
  "Lorem ipsum dolor sit amet",
  "Pellentesque tincidunt enim libero",
  "Morbi id finibus diam vel pretium enim",
  "Duis semper sapien in eros euismod sodales",
  "Vestibulum cursus lorem nibh",
  "Morbi ullamcorper vulputate metus non eleifend",
  "Etiam vitae elit felis sit amet",
  "Nullam congue massa vitae quam",
  "Proin sed ante rutrum",
  "Curabitur vel lectus",
];

const ReadMore = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography
        component="h1"
        variant="h4"
        className={classes.heading}
        sx={{ marginBottom: "30px", fontWeight: 600, fontSize: "2rem" }}
      >
        Read More
      </Typography>
      <ul className={classes.newsLinks}>
        {links.map((link) => {
          return (
            <li>
              <Link to="/">
                <Grid container spacing={3}>
                  <Grid item md={1}>
                    <i className="fas fa-arrow-right"></i>
                  </Grid>
                  <Grid item md={11}>
                    {link}
                  </Grid>
                </Grid>
              </Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default ReadMore;
