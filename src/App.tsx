import React from "react";
import "./App.css";
import "./assets/css/globals.css";
// import "./assets/css/react-slick.css";
// import "slick-carousel/slick/slick.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useRoutes } from "react-router-dom";
import Router from "./routes/Router";
import theme from "./theme";

function App() {
  const routing = useRoutes(Router);
  return (
  
  );
}

export default App;
