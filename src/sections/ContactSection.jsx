import {Stack, Box, Typography, Grid, Button, Link} from "@mui/material";

import { useState } from "react";

import { useNavigation } from "../contexts/NavigationContext";

export default function ContactSection({sx}) {
  const { aboutRef, portfolioRef, contactRef, scrollToSection } = useNavigation();

  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("tylerwu137@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const contactInfoLine = (type, link) => (
    <Stack spacing={2} direction="row" sx={{alignItems: "center"}}>
      <Box sx={{height: "30px", aspectRatio: "1 / 1", backgroundColor: "var(--primary)", borderRadius: 2}}/>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        sx={{
          "&:hover": {
            "& .link-text": {
              color: "black",
              fontWeight: 500,
            },
          },
        }}
      >
        <Typography
          className="link-text"
          variant="secondary2"
          sx={{
            color: "black",
            transformOrigin: "center",
            transition: "color 0.2s ease, font-weight 0.2s ease",
          }}
        >
          {type}
        </Typography>
      </Link>
    </Stack>
  );

  return (
    <Box ref={contactRef} sx={{ width: "100%",
        scrollSnapAlign: "start", 
        display: "flex",
        alignItems: "center",
        ...sx
      }}>
        <Stack direction="row" sx={{height: "100%", width: "100%", transform: "translateY(20%)",}}>
          <Box
            sx={{
              width: "3px",
              height: "50%",
              backgroundColor: "var(--primary)",
              borderRadius: 99,
            }}
          />
          <Box sx={{flex: 0.3}}/>
          <Stack spacing={2} sx={{flex: 10, minWidth: 0}}>
            <Typography variant="primary2">Let's keep in touch :&#41;</Typography>
            <Box sx={{height: 4}}/>
            <Grid
              container
              sx={{
                display: "grid",
                gridTemplateColumns: "20% 20%",
                columnGap: "15%",
                width: "100%",
              }}
            >
              <Grid>
                <Stack>
                  <Typography variant="primary4">Contact Info</Typography>
                  <Stack sx={{mt: 2}} spacing={1.5}>
                    {contactInfoLine("LinkedIn", "https://www.linkedin.com/in/tyler-wu-software-dev/")}
                    {contactInfoLine("Github", "https://github.com/TylerWu137")}
                    <Stack spacing={2} direction="row" sx={{alignItems: "center"}}>
                      <Box sx={{height: "30px", aspectRatio: "1 / 1", backgroundColor: "var(--primary)", borderRadius: 2}}/>
                      <Typography
                        className="linkedin-text"
                        variant="secondary2"
                        sx={{
                          color: "black",
                          transformOrigin: "center",
                          transition: "color 0.2s ease, font-weight 0.2s ease",
                          "&:hover": {
                            color: "black",
                            fontWeight: 500,
                          },
                        }}
                        onClick={copyEmail}
                      >
                        {copied ? "Copied!" : "tylerwu137@gmail.com"}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
              <Grid>
                <Stack>
                  <Typography variant="primary4">Location</Typography>
                  <Stack sx={{mt: 2}} spacing={1.5}>
                    <Typography variant="secondary2">Stony Brook University</Typography>
                    <Typography variant="secondary2">New York</Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
    </Box>
  );
}