import React from "react";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Zoom from "@mui/material/Zoom";
import { Fab } from "@mui/material";

const ScrollTop = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 70,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
};

const useStyles = makeStyles((theme) => ({
  backToTop: {
    position: "fixed",
    lineHeight: 1,
    fontSize: 16,
    right: 15,
    left: "95vw",
    bottom: 15,
    transition: "background 0.5s",
    zIndex: 11,
  },
}));

const BackToTop = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <ScrollTop className={classes.backToTop}>
      <Fab
        aria-label="scroll back to top"
        size="small"
        color="primary"
        sx={{
          borderRadius: 1,
          width: 35,
          height: 35,
          color: theme.palette.common.white,
          "&:hover": {
            backgroundColor: theme.palette.common.black,
          },
        }}
      >
        <i className="fa fa-chevron-up"></i>
      </Fab>
    </ScrollTop>
  );
};

export default BackToTop;
