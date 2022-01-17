import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ContactPage from "./pages/ContactPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6F61",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    fontWeightBold: 600,
    fontWeightRegular: 400,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
