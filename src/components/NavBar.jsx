import { Stack, Box, Button, Typography } from "@mui/material";

import { useNavigation } from "../contexts/NavigationContext";

export default function NavBar({ sx }) {
  const { aboutRef, portfolioRef, contactRef, scrollToSection } = useNavigation();

  const NavButton = (section, ref) => (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",

        "&:hover .section-text": {
          color: "black",
          transform: "scale(1.07)",
        },
      }}
      onClick={() => scrollToSection(ref)}
    >
      <Typography
        className="section-text"
        variant="primary6"
        sx={{
          color: "black",
          transformOrigin: "center",
          transition: "color 0.2s ease, transform 0.2s ease",
        }}
      >
        {section}
      </Typography>
    </Box>
  );

  return (
    <Stack spacing={2} direction="row" sx={{alignItems: "center", backgroundColor: "var(--secondary)", ...sx}}>
      <Box></Box>
      <Box sx={{height: "60%", aspectRatio: "1 / 1", border: 1}}></Box>
      <Typography variant="secondary1">Tyler Wu</Typography>
      <Box sx={{flex: 1}} />
      <Stack spacing={5} direction="row">
        {NavButton("About", aboutRef)}
        {NavButton("Portfolio", portfolioRef)}
        {NavButton("Contact", contactRef)}
      </Stack>
      <Box></Box>
      <Box></Box>
    </Stack>
  );
}