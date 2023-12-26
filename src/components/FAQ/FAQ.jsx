import styles from "./FAQ.module.css";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQ() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h1>FAQ</h1>
      </div>
      <div className={styles.mainData}>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <div className={styles.accordion}>
          <Accordion>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "var(--color-primary)" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                color: "var(--color-white)",
                backgroundColor: "var(--color-secondary)",
                borderColor: "var(--color-secondary)",
              }}
            >
              <Typography>Do I need a personal injury report?</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordianAnswer}>
              <Typography>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "var(--color-primary)" }} />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                color: "var(--color-white)",
                backgroundColor: "var(--color-secondary)",
                borderColor: "var(--color-secondary)",
              }}
            >
              <Typography>How much is my case worth?</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordianAnswer}>
              <Typography>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "var(--color-primary)" }} />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                color: "var(--color-white)",
                backgroundColor: "var(--color-secondary)",
                borderColor: "var(--color-secondary)",
              }}
            >
              <Typography>What should I do right after car accidect</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordianAnswer}>
              <Typography>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "var(--color-primary)" }} />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                color: "var(--color-white)",
                backgroundColor: "var(--color-secondary)",
                borderColor: "var(--color-secondary)",
              }}
            >
              <Typography>How much is my case worth?</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordianAnswer}>
              <Typography>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
