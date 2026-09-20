import {Stack, Box, Typography, Button, Link} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import { useState } from "react";
import { useNavigation } from "../contexts/NavigationContext";

export default function AboutSection({sx}) {
  const { aboutRef, portfolioRef, contactRef, scrollToSection } = useNavigation();
  const [copiedAbout, setCopiedAbout] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("tylerwu137@gmail.com");
    setCopiedAbout(true);

    setTimeout(() => {
      setCopiedAbout(false);
    }, 1000);
  };

  const socialIconSx = {
    fontSize: "40px",
    color: "var(--primary)",
    transition: "transform 0.2s ease, color 0.2s ease",
    "&:hover": {
      color: "black",
      transform: "scale(1.05)",
      cursor: "pointer",
    },
  };

  const socialIconBox = (link, icon) => (
    <Box sx={{
      height: "42px",
      aspectRatio: "1 / 1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        sx={{
          height: "42px",
          aspectRatio: "1 / 1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Link>
    </Box>
  );

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
            <Typography variant="secondary2" sx={{overflowWrap: "break-word",}}> I'm Tyler, and I'm a senior at Stony Brook University studying Computer Science (Honors) and Physics, pursuing minors in Digital/Studio Arts as well. I love bridging software development and game programming with design and art by creating applications that are engaging, user-centered, and visually expressive.

            </Typography>
            <Stack spacing={2} direction="row">
              {socialIconBox("https://www.linkedin.com/in/tyler-wu-software-dev/", 
                <LinkedInIcon sx={socialIconSx} />
              )}
              {socialIconBox("https://github.com/TylerWu137", 
                <GitHubIcon sx={socialIconSx} />
              )}
              <Box sx={{
                height: "42px",
                aspectRatio: "1 / 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Box>
                  {copiedAbout ? 
                    <Typography variant="secondary2">Copied!</Typography> : 
                    <EmailIcon sx={socialIconSx} onClick={copyEmail}/>}
                </Box>
                
              </Box>
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