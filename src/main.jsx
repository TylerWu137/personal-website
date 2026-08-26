import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { NavigationProvider } from "./contexts/NavigationContext";

import App from "./App.jsx";
import theme from "./theme.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </ThemeProvider>
);