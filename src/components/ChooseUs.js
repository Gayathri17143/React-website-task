import React from "react";
import { Container, Grid2, Button, Typography } from "@mui/material";

import customers from "../assets/customers.PNG";
import processes from "../assets/processes.PNG";
import experience from "../assets/experience.PNG";
import business from "../assets/business.PNG";
import client from "../assets/client.PNG";
import creative from "../assets/creative.PNG";
import "./ChooseUs.css";
const Grid2Example = () => {
  return (
    <>
      <Container maxWidth="1350px">
      <section style={{ background: "#111204"  }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontSize: { xs: "2rem", md: "1.5rem", color: "#fff" }, // Responsive font size
          }}
        >
          Why Choose Us?
        </Typography>
        <Grid2 container spacing={3} sx={{ padding: 2 }}>
          <Grid2 item xs={12} sm={6} md={3}>
            <img src={business} alt="" width={"100%"} />
          </Grid2>
          <Grid2 item xs={12} sm={6} md={9} className="pad">
            <Typography variant="h6" className="head">
              Solutions Tailored Specifically to your Business Needs
            </Typography>
            <Typography className="para">
              {" "}
              We provide customized solutions for your business needs, ensuring
              relevance and success.
            </Typography>
            <Button variant="contained" color="success" sx={{ color: "#000" }}>
              Read More
            </Button>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={3} sx={{ padding: 2 }}>
          <Grid2 item xs={12} sm={6} md={6} className="pad">
            <Typography className="head" variant="h6">
              Creative Excellance Elevates Every Project
            </Typography>
            <Typography className="para">
              {" "}
              Creative excellence drives our work. From concept to execution, we
              aim for exceptional results.
            </Typography>
            <Button variant="contained" color="success" sx={{ color: "#000" }}>
              Read More
            </Button>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={6}>
            <img src={creative} alt="" width={"100%"} />
          </Grid2>
        </Grid2>
        <Grid2 container spacing={3} sx={{ padding: 2 }}>
          <Grid2 item xs={12} sm={6} md={6}>
            <img src={client} alt="" width={"100%"} />
          </Grid2>
          <Grid2 item xs={12} sm={6} md={6} className="pad">
            <Typography className="head" variant="h6">
              Client Satisfaction is our Main Focus
            </Typography>
            <Typography className="para">
              Our main goal is your satisfaction , and we work tirelessly to
              ensure that you are pleased with the results we achieve together.
            </Typography>
            <Button variant="contained" color="success" sx={{ color: "#000" }}>
              Read More
            </Button>
          </Grid2>
        </Grid2>
      </section>
      </Container>
      <section style={{ background: "#111204", paddingTop: "30px" }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontSize: { xs: "2rem", md: "1.5rem" },
            color: "#fff",
            textAlign: "center",
          }}
        >
          Work with Click it new Tech
        </Typography>
        <Grid2
          container
          spacing={3}
          sx={{ padding: 2, justifyContent: "center", alignItems: "center" }}
        >
          <Grid2 item xs={12} sm={6} md={6} className="pad">
            <img
              src={customers}
              alt=""
              width={"100%"}
              style={{ margin: "0 auto", display: "block" }}
            />
            <Typography className="head">10,000+</Typography>
            <Typography className="para">Happy Customers</Typography>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={6} className="pad">
            <img
              src={processes}
              alt=""
              width={"100%"}
              style={{ margin: "0 auto", display: "block" }}
            />
            <Typography className="head">20,000+</Typography>
            <Typography className="para">Sucess Processes</Typography>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={6} className="pad">
            <img
              src={experience}
              alt=""
              width={"100%"}
              style={{ margin: "0 auto", display: "block" }}
            />
            <Typography className="head"> 10+ Years</Typography>
            <Typography className="para">of Experience</Typography>
          </Grid2>
        </Grid2>
      </section>
      
    </>
  );
};

export default Grid2Example;
