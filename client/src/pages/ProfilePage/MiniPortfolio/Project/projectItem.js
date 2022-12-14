import * as React from "react";
import { Typography, Grid } from "@mui/material";
import { displayMonthInWord } from "../utilsDisplayMonthInWord";

const classes = {
  detailsBox: {
    width: "100%",
    minHeight: "100px",
    border: "1px solid #B1B1B1",
    backgroundColor: "white",
    padding: "0.5rem",
    paddingInline: "1rem",
  },
};

export default function ProjectItem(props) {
  return (
    <div style={classes.detailsBox}>
      <Grid container sx={{ alignItems: "center" }}>
        <Grid item xs={9}>
          <Typography
            component="span"
            sx={{
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            {props.info.title}
          </Typography>
          <Typography
            sx={{
              fontSize: 15,
              color: "#909090",
            }}
          >
            {props.info.brief}
          </Typography>
        </Grid>

        <Grid item xs={3} sx={{ textAlign: "right" }}>
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: 540,
              mb: 3,
            }}
          >
            {displayMonthInWord(props.info.start_month)} {props.info.start_year}
            {" - "}
            {props.info.end_year === null ? (
              "Present"
            ) : (
              <>
                {displayMonthInWord(props.info.end_month)}
                {props.info.end_year}
              </>
            )}
          </Typography>
        </Grid>
      </Grid>

      <ul>
        {props.info.bullets.map((str, i) => {
          return <li key={i}>{str}</li>;
        })}
      </ul>

      <span style={{ display: "flex", gap: "10px" }}>
        {props.info.tools_used.map((str, i) => {
          return (
            <code key={i} style={{ color: "#569cd6" }}>
              {str}
            </code>
          );
        })}
      </span>
    </div>
  );
}
