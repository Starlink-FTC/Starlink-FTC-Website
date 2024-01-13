import * as React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import { rgb } from "@react-spring/shared";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Welcome To The <br />
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Living Quarters
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-purple-400">
        <p>Lets meet the Astral Residents of the Starlink Station</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">The Team</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          <Grid container spacing={2}>
            <Grid item>
              <Card
                sx={{
                  minWidth: 275,
                  backgroundColor: "#4895EF",
                  borderRadius: 5,
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ textAlign: "center" }}
                    variant="h4"
                    component="div"
                  >
                    Krishanth
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;