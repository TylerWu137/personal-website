import {Stack, Box, Typography, Button, Link} from "@mui/material";

import { useNavigation } from "../contexts/NavigationContext";

export default function AboutSection({sx}) {
  const { aboutRef, portfolioRef, contactRef, scrollToSection } = useNavigation();

  return (
    <Box ref={aboutRef} sx={{ width: "100%",
        scrollSnapAlign: "start", 
        display: "flex",
        alignItems: "center",
        ...sx
      }}>
        <Stack direction="row" sx={{height: "50%", width: "100%", transform: "translateY(-10%)",}}>
          <Box
            sx={{
              width: "3px",
              height: "100%",
              backgroundColor: "var(--primary)",
              borderRadius: 99,
            }}
          />
          <Box sx={{flex: 0.5}}/>
          <Stack spacing={2} sx={{flex: 10, minWidth: 0}}>
            <Typography variant="primary2">Hi Everyone!</Typography>
            <Box sx={{height: 4}}/>
            <Typography variant="secondary2" sx={{overflowWrap: "break-word",}}>I'm Tyler. Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Sed lectus elit, posuere sed sem at, 
              efficitur luctus mauris. Vestibulum vel lectus eget 
              nisi bibendum interdum. Aenean tincidunt sodales arcu 
              sed dapibus. Integer tortor odio, suscipit eu congue quis, 
              posuere nec purus.
              efficitur luctus mauris. Vestibulum vel lectus eget 
              nisi bibendum interdum. Aenean tincidunt sodales arcu 
              sed dapibus. Integer tortor odio, suscipit eu congue quis, 
              posuere nec purus.
            </Typography>
            <Stack spacing={2} direction="row">
              <Box sx={{height: "40px", aspectRatio: "1 / 1", backgroundColor: "var(--primary)", borderRadius: 2}}/>
              <Box sx={{height: "40px", aspectRatio: "1 / 1", backgroundColor: "var(--primary)", borderRadius: 2}}/>
              <Box sx={{height: "40px", aspectRatio: "1 / 1", backgroundColor: "var(--primary)", borderRadius: 2}}/>
            </Stack>
            <Box
            sx={{
              width: "100%",
              height: "3px",
              backgroundColor: "var(--primary)",
              borderRadius: 99,
            }}
          />
          </Stack>
          <Box sx={{flex: 1}}/>
          <Box sx={{borderRadius: 999, height: "80%", aspectRatio: "1 / 1", border: 3, color: "var(--primary)"}}/>
        </Stack>
    </Box>
  );
}