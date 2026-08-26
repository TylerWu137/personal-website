import {Stack, Box, Typography, Button, Link} from "@mui/material";

import { useNavigation } from "../contexts/NavigationContext";

export default function PortfolioSection({sx}) {
  const { aboutRef, portfolioRef, contactRef, scrollToSection } = useNavigation();

  return (
    <Box sx={{border: 1, width: "100%",
        scrollSnapAlign: "start", ...sx
      }} 
      ref={portfolioRef}>
        portfolio
    </Box>
  );
}