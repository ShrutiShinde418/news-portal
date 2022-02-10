import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import news1 from "../assets/news-1.jpg";
import news2 from "../assets/news-2.jpg";
import news3 from "../assets/news-3.jpg";
import news4 from "../assets/news-4.jpg";
import news5 from "../assets/news-5.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTab-root": {
      textTransform: "none",
      fontSize: 17,
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightRegular,
      transition: "0.5s",
      "&:hover": { backgroundColor: theme.palette.primary.main },
    },
    "& .Mui-selected": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    "& .MuiGrid-container:last-of-type": { marginBottom: 0 },
  },
  imgFluid: {
    height: "auto",
    width: "100%",
  },
  headline: {
    padding: "10px 15px",
    backgroundColor: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    "& h2": { fontSize: 18 },
  },
}));

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3, backgroundColor: "#F2F2F2" }}>{children}</Box>
      )}
    </div>
  );
};

const Tile = (props) => {
  const classes = useStyles();
  return (
    <Grid container mb={2}>
      <Grid item xs={4}>
        <img src={props.image} className={classes.imgFluid} alt="Lorem Ipsum" />
      </Grid>
      <Grid item xs={8} className={classes.headline}>
        <Typography component="h2">{props.title}</Typography>
      </Grid>
    </Grid>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const TabBar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor={theme.palette.common.white}
          variant="fullWidth"
          aria-label="full width tabs"
        >
          <Tab label={props.headings[0]} {...a11yProps(0)} />
          <Tab label={props.headings[1]} {...a11yProps(1)} />
          <Tab label={props.headings[2]} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Tile image={news1} title="Lorem ipsum dolor sit amet" />
          <Tile image={news2} title="Lorem ipsum dolor sit amet" />
          <Tile image={news3} title="Lorem ipsum dolor sit amet" />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Tile image={news4} title="Lorem ipsum dolor sit amet" />
          <Tile image={news5} title="Lorem ipsum dolor sit amet" />
          <Tile image={news1} title="Lorem ipsum dolor sit amet" />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Tile image={news2} title="Lorem ipsum dolor sit amet" />
          <Tile image={news3} title="Lorem ipsum dolor sit amet" />
          <Tile image={news4} title="Lorem ipsum dolor sit amet" />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};

export default TabBar;
