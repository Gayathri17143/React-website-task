import React from "react";
import { Card, CardContent, Typography, Grid, Container } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "../assets/testimonial.PNG";
import "./Testimonial.css";
const testimonials = [
  {
    name: "Gymstory",
    title:
      "Kornix Is The Best Digital Agency I Have Ever Seen! Highly Recommended!",
    testimonial:
      "I recently hired Ideapeel for a custom web development project and couldnt be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.",
    
    heading: "Diana Loreza",
    director: "Director of Gymstory",
  },
  {
    name: "Gymstory",
    title:
      "Kornix Is The Best Digital Agency I Have Ever Seen! Highly Recommended!",
    testimonial:
      "I recently hired Ideapeel for a custom web development project and couldnt be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.",
   
    heading: "Diana Loreza",
    director: "Director of Gymstory",
  },
];

const TestimonialCard = ({
  name,
  title,
  testimonial,
  image,
  heading,
  director,
}) => (
  <Card
    style={{
      margin: "40px",
      padding: "20px",
      borderRadius: "20px",
      background: "#f9f9f9",
    }}
  >
    <CardContent>
      <Grid container spacing={2} alignItems="center">
       
        <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <Typography
            variant="h5"
            style={{ fontWeight: "600", marginTop: "10px" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            style={{ marginTop: "10px", fontSize: "16px" }}
          >
            {testimonial}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            style={{ marginTop: "10px", fontWeight: "600" }}
          >
            {heading}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {director}
          </Typography>
        </Grid>

       
        <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
          <img
            src={Image}
            alt={name}
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

const TestimonialCarousel = () => {
  return (
    <>
      <div className="d-none d-md-block testimonial-section">
        <div style={{ textAlign: "center", margin: "30px" }}>
          <p className="paragraph">TESTIMONIAL</p>
          <h3 className="main-heading">
            Customer is our Top
            <br /> Priority
          </h3>
          <p className="paragraph1">
            We survey all of our clients, the results of which go directly
            <br /> to our CEO.
          </p>
        </div>
        <Container>
          <Carousel
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            showArrows={true}
            infiniteLoop={true}
            autoPlay
            interval={3000}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <TestimonialCard
                    name={testimonial.name}
                    title={testimonial.title}
                    testimonial={testimonial.testimonial}
                    heading={testimonial.heading}
                    director={testimonial.director}
                    image={testimonial.image}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </Container>
      </div>
    </>
  );
};

export default TestimonialCarousel;
