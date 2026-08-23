import { Stack, Box, Button, Typography } from "@mui/material";

import { useNavigation } from "../contexts/NavigationContext";

export default function NavBar({ sx }) {
  const { aboutRef, portfolioRef, contactRef, scrollToSection } = useNavigation();

  const NavButton = (section, ref) => (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center"
      }}
      onClick={() => scrollToSection(ref)}
    >
      <Typography variant="primary6">{section}</Typography>
    </Box>
  );

  return (
    <Stack spacing={2} direction="row" sx={{alignItems: "center", pl: 2, pr: 5, backgroundColor: "var(--secondary)", ...sx}}>
      <Box sx={{height: "60%", aspectRatio: "1 / 1", border: 1}}></Box>
      <Typography variant="secondary1">Tyler Wu</Typography>
      <Box sx={{flex: 1}} />
      <Stack spacing={5} direction="row">
        {NavButton("About", aboutRef)}
        {NavButton("Portfolio", portfolioRef)}
        {NavButton("Contact", contactRef)}
      </Stack>
    </Stack>
  );
}