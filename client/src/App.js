import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ContactPage from "./pages/ContactPage";
import LoginOrRegistrationPage from "./pages/LoginOrRegistrationPage";


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
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/login_registration"
          element={<LoginOrRegistrationPage />}
        />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
