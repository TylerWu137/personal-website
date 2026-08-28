import { useRef } from "react";
import {Stack, Box, Typography, Button, Link} from "@mui/material";

import NavBar from "./components/NavBar";
import AboutSection from "./sections/AboutSection";
import PortfolioSection from "./sections/PortfolioSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

import { useNavigation } from "./contexts/NavigationContext";

export default function App() {
  
  const { navBarHeight, aboutRef, portfolioRef, contactRef, scrollToSection } = useNavigation();

  return (
    <Stack sx={{height: "100%", alignItems: "center", width: "100%"}}>
      <NavBar sx={{height: navBarHeight, width: "100%", position: "fixed"}} />
      <Stack className="page" sx={{
        height: "90%", alignItems: "center", width: "100%", 
        marginTop: navBarHeight, 
        overflowY: "auto", overflowX: "hidden",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },}}
      >
        <AboutSection className="section" sx={{minHeight: "100%", height: "100%", width: "65%", boxSizing: "border-box"}}/>
        <PortfolioSection className="section" sx={{minHeight: "100%", height: "auto", flexShrink: 0, width: "65%", boxSizing: "border-box"}}/>
        <ContactSection className="section" sx={{minHeight: "100%", width: "65%", boxSizing: "border-box"}}/>
        {/*<Footer sx={{minHeight: "20%", minWidth: "100%", boxSizing: "border-box"}}></Footer>*/}
      </Stack>
    </Stack>
  );
}