import { useRef } from "react";
import {Stack, Box, Typography, Button, Link} from "@mui/material";

import NavBar from "./components/NavBar";
import AboutSection from "./sections/AboutSection";

import { NavigationProvider } from "./contexts/NavigationContext";


export default function App() {

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <NavigationProvider>
      <Stack className="page" sx={{height: "100%"}}>
        <NavBar sx={{height: "10%"}} />
        <AboutSection className="section"/>
      </Stack>
    </NavigationProvider>
  );
}