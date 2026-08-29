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

export default function PortfolioSection({sx}) {
  const { aboutRef, portfolioRef, contactRef, scrollToSection } = useNavigation();

  const PortfolioItem = (title, dates, description) => (
    <TimelineItem>
      <TimelineOppositeContent
        align="right"
        variant="primary6"
        sx={{
          m: 0,
          px: 4
        }}
      >
        {dates}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ mt: -2, mb: 4, px: 4, }}>
        <Stack spacing={1}>
          <Typography variant="primary3" component="span">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Stack>
      </TimelineContent>
    </TimelineItem>
  );

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
        {PortfolioItem("Critter Grove", "June 2026 - Present", 
          `adipiscing elit. Sed lectus elit, posuere sed sem at, 
          efficitur luctus mauris. Vestibulum vel lectus eget 
          nisi bibendum interdum. Aenean tincidunt sodales arcu 
          sed dapibus. Integer tortor odio, suscipit eu congue quis, 
          posuere nec purus.
          efficitur luctus mauris. Vestibulum vel lectus eget 
          nisi bibendum interdum. Aenean tincidunt sodales arcu 
          sed dapibus. Integer tortor odio, suscipit eu congue quis, 
          posuere nec purus.`
        )}
        {PortfolioItem("Project Gamma", "January 2025 - June 2025", 
          `adipiscing elit. Sed lectus elit, posuere sed sem at, 
          efficitur luctus mauris. Vestibulum vel lectus eget 
          nisi bibendum interdum. Aenean tincidunt sodales arcu 
          sed dapibus. Integer tortor odio, suscipit eu congue quis, 
          posuere nec purus.
          efficitur luctus mauris. Vestibulum vel lectus eget 
          nisi bibendum interdum. Aenean tincidunt sodales arcu 
          sed dapibus. Integer tortor odio, suscipit eu congue quis, 
          posuere nec purus.`
        )}
        {PortfolioItem("AlBuddy", "March 2024 - May 2024", 
          `adipiscing elit. Sed lectus elit, posuere sed sem at, 
          efficitur luctus mauris. Vestibulum vel lectus eget 
          nisi bibendum interdum. Aenean tincidunt sodales arcu 
          sed dapibus. Integer tortor odio, suscipit eu congue quis, 
          posuere nec purus.
          efficitur luctus mauris. Vestibulum vel lectus eget 
          nisi bibendum interdum. Aenean tincidunt sodales arcu 
          sed dapibus. Integer tortor odio, suscipit eu congue quis, 
          posuere nec purus.`
        )}
        {PortfolioItem("Pokemon-based Game", "May 2022 - June 2023", 
          `adipiscing elit. Sed lectus elit, posuere sed sem at, 
          efficitur luctus mauris. Vestibulum vel lectus eget 
          nisi bibendum interdum. Aenean tincidunt sodales arcu 
          sed dapibus. Integer tortor odio, suscipit eu congue quis, 
          posuere nec purus.
          efficitur luctus mauris. Vestibulum vel lectus eget 
          nisi bibendum interdum. Aenean tincidunt sodales arcu 
          sed dapibus. Integer tortor odio, suscipit eu congue quis, 
          posuere nec purus.`
        )}
        {PortfolioItem("Multi-threaded Socket Chat", "April 2023", 
          `adipiscing elit. Sed lectus elit, posuere sed sem at, 
          efficitur luctus mauris. Vestibulum vel lectus eget 
          nisi bibendum interdum. Aenean tincidunt sodales arcu 
          sed dapibus. Integer tortor odio, suscipit eu congue quis, 
          posuere nec purus.
          efficitur luctus mauris. Vestibulum vel lectus eget 
          nisi bibendum interdum. Aenean tincidunt sodales arcu 
          sed dapibus. Integer tortor odio, suscipit eu congue quis, 
          posuere nec purus.`
        )}
      </Timeline>
    </Box>
  );
}