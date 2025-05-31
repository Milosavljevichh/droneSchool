import { useState } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "What is included in the drone course?",
    answer:
      "The course includes theoretical lessons, practical flight training, and access to certified instructors."
  },
  {
    question: "Do I need my own drone to join?",
    answer:
      "No, we provide training drones for use during practice sessions."
  },
  {
    question: "Is the certification recognized?",
    answer:
      "Yes, you will receive a Celestial Solutions certificate that complies with national drone regulations."
  },
  {
    question: "Can I access the course on mobile?",
    answer:
      "Absolutely. The course is mobile-friendly and accessible from any device with an internet connection."
  }
];

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "32px 16px"
  },
  accordion: {
    mb: 1.5,
    borderRadius: "12px !important", // force radius
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    overflow: "hidden", // clip edges correctly
    "&::before": {
      display: "none" // remove MUI's default line
    }
  },
  summary: {
    fontWeight: "bold",
    fontSize: "1rem",
    color: "#06202B"
  },
  details: {
    fontSize: "0.95rem",
    color: "#3a3a3a"
  }
};

export default function FAQSection() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panelId) => (event, isExpanded) => {
    setExpanded(isExpanded ? panelId : false);
  };

  return (
    <Box sx={styles.container}>
      {faqData.map((item, index) => {
        const panelId = `panel-${index}`;
        return (
          <Accordion
            key={panelId}
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
            sx={styles.accordion}
            disableGutters
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
            >
              <Typography sx={styles.summary}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={styles.details}>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
