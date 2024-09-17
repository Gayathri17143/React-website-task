import React from "react";
import { Container, Grid2, Paper, Typography } from "@mui/material";
import seo from "../assets/marketing.PNG";
import content from "../assets/content.PNG";
import media from "../assets/media.PNG";
import ppc from "../assets/ppc.PNG";
import email from "../assets/email.PNG";
import "./Services.css";
const Grid2Example = () => {
  return (
    <>
      {/* <Container> */}
        <section style={{  background: "#111204"  ,color: "#fff" }}>
          <Typography className="main-head">Services</Typography>
          <Typography className="sub-head">
            Strategic Services drive digital success with tailored,comprehansive
            approaches.
          </Typography>

          <Grid2
            container
            spacing={3}
            sx={{ padding: 2, justifyContent: "center" }}
          >
            <Grid2 item xs={12} sm={6} md={4} className="clr">
              <img src={seo} alt="" width={"100%"} />
              <Typography>SEO Marketing</Typography>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} className="clr">
              <img src={content} alt="" width={"100%"} />
              <Typography>Content Marketing</Typography>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} className="clr">
              <img src={media} alt="" width={"100%"} />
              <Typography> Social Media Management</Typography>
            </Grid2>
          </Grid2>
          <Grid2
            container
            spacing={3}
            sx={{ padding: 2, justifyContent: "center" }}
          >
            <Grid2 item xs={12} sm={6} md={4} className="clr">
              <img src={ppc} alt="" width={"100%"} />
              <Typography> PPC</Typography>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} className="clr">
              <img src={email} alt="" width={"100%"} />
              <Typography> Email Marketing</Typography>
            </Grid2>
          </Grid2>
        </section>
      {/* </Container> */}
    </>
  );
};

export default Grid2Example;
