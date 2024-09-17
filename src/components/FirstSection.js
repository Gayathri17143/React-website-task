import React from "react";
import { Box, Typography, Button, Grid2 } from "@mui/material";
import "./FirstSection.css";
import LayersIcon from "@mui/icons-material/Layers";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
const BackgroundWithText = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('/images/bg-image.jfif')`, // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh", // Full viewport height
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          flexDirection: "column", // Stack text and button vertically
          color: "white", // Text color
          textAlign: "center", // Center text
          padding: 2,
          px: { xs: 3, md: 6 }, // Horizontal padding responsive
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            fontSize: { xs: "2rem", md: "4rem" }, // Responsive font size
          }}
        >
         Boost Your Brand With Innovative Digital Marketing
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontSize: { xs: "2rem", md: "1.5rem" }, // Responsive font size
          }}
        >
         Drive Engagement and Conversions with Advanced Digital Marketing Strategies.
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" }, // Responsive button text
            padding: { xs: "0.5rem 1.5rem", md: "0.8rem 2rem" }, // Responsive padding
          }}
        >
          Start Now
        </Button>
        <section>
          <hr style={{ width: "20%" }}></hr>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.5rem", md: "1rem" }, // Responsive font size
            }}
          >
            TRUSTED BY THOUSAND COMPANIES
          </Typography>
        </section>
      </Box>
      <Grid2
        container
        spacing={3}
        sx={{ padding: 2, background: "#141414", color: "#ffffff",justifyContent:"center" }}
      >
        <Grid2 item xs={12} sm={6} md={4}>
          <div className="dis-flex">
            <LayersIcon />
            <Typography variant="h6">layers</Typography>
          </div>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <div className="dis-flex">
            <HourglassFullIcon />
            <Typography variant="h6">Quotient</Typography>
          </div>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <div className="dis-flex">
            <JoinFullIcon />
            <Typography variant="h6">Circooles</Typography>
          </div>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <div className="dis-flex">
            <HourglassFullIcon />
            <Typography variant="h6">Hourglass</Typography>
          </div>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <div className="dis-flex">
            <LayersIcon />
            <Typography variant="h6">Command+R</Typography>
          </div>
        </Grid2>
      </Grid2>
    </>
  );
};

export default BackgroundWithText;
