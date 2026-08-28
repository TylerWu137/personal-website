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

  const PortfolioItem = () => (
    <TimelineItem>
      <TimelineOppositeContent
        align="right"
        variant="primary6"
        sx={{
          m: '0 0',
        }}
      >
        June 2026 - Present
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '2px', mb: 4, px: 2 }}>
        <Stack spacing={1}>
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>adipiscing elit. Sed lectus elit, posuere sed sem at, 
            efficitur luctus mauris. Vestibulum vel lectus eget 
            nisi bibendum interdum. Aenean tincidunt sodales arcu 
            sed dapibus. Integer tortor odio, suscipit eu congue quis, 
            posuere nec purus.
            efficitur luctus mauris. Vestibulum vel lectus eget 
            nisi bibendum interdum. Aenean tincidunt sodales arcu 
            sed dapibus. Integer tortor odio, suscipit eu congue quis, 
            posuere nec purus.
          </Typography>
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
        {PortfolioItem()}
        {PortfolioItem()}
        {PortfolioItem()}
        {PortfolioItem()}
        {PortfolioItem()}
      </Timeline>
    </Box>
  );
}