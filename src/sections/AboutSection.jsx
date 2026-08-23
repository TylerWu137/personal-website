import {Stack, Box, Typography, Button, Link} from "@mui/material";

import { useNavigation } from "../contexts/NavigationContext";

export default function AboutSection() {
  const { aboutRef, portfolioRef, contactRef, scrollToSection } = useNavigation();

  return (
    <Box  ref={aboutRef}>About
    </Box>
  );
}