import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6F61",
    },
  },
  typography:{
    fontFamily:"Montserrat",
    fontWeightBold: 600,
    fontWeightRegular: 400,
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
