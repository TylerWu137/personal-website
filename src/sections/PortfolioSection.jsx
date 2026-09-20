import {Stack, Box, Typography, Button, Link} from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';

import { useNavigation } from "../contexts/NavigationContext";
import AutoFitText from "../components/AutoFitText";

export default function PortfolioSection({sx}) {
  const { aboutRef, portfolioRef, contactRef, scrollToSection } = useNavigation();

  const PortfolioItem = (title, position, dates, description, side) => {
    const isLeft = side === "left";

    return (
      <>
      <TimelineItem position={side} sx={{alignItems: "center", minHeight: 0}}>
        <TimelineOppositeContent
          align={isLeft ? "left" : "right"}
          variant="primary6"
          sx={{ m: 0, px: 4 }}
        >
          {dates}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{my: 0}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{px: 4 }}>
          <Stack spacing={1}>
            <Stack
              direction={isLeft ? "row-reverse" : "row"}
              spacing={2}
              
              sx={{ alignItems: "center"}}
            >
              <Typography variant="primary6" sx={{color: "var(--primary)"}}>
                • {position} •
              </Typography>
              <AutoFitText variant="primary3" minFontSize={12} maxFontSize={28}>
                {title}
              </AutoFitText>
            </Stack>
          </Stack>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem position={side}>
        <TimelineSeparator>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography sx={{ mb: 16, px: 2.5, color: "var(--primary)"}}>{description}</Typography>
        </TimelineContent>
      </TimelineItem>
      </>
    );
  };

  return (
    <Box sx={{ width: "100%",
        scrollSnapAlign: "start", ...sx
      }} 
      ref={portfolioRef}>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent/>
          <TimelineSeparator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent/>
        </TimelineItem>
        {PortfolioItem("Critter Grove", "Creator", "June 2026 - Present",
          `a pet-collection productivity and wellness app`, "right"
        )}
        {PortfolioItem("Project Gamma", "Creator", "January 2025 - June 2025",
          `a story-based game where you and your companion dog, Gamma, must venture across a post-nuclear war world to collect data on mutated wildlife to determine if living conditions are safe.`, "left"
        )}
        {PortfolioItem("AlBuddy Tutoring", "Intern", "March 2024 - May 2024",
          `a project-driven tutoring start-up platform with professional insight and customized curriculums.`, "right"
        )}
        {PortfolioItem("Pokemon-based Game", "Creator", "May 2022 - June 2023",
          `a mini version of the classic pokemon game.`, "left"
        )}
        {PortfolioItem("Multi-threaded Socket Chat", "Creator", "April 2023",
          `a chat application that uses a multi-threaded server and TCP sockets to communicate from client side to server side in Java.`, "right"
        )}
      </Timeline>
    </Box>
  );
}