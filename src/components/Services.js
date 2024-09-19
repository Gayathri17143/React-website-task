import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import seo from "../assets/marketing.PNG";
import content from "../assets/content.PNG";
import media from "../assets/media.PNG";
import ppc from "../assets/ppc.PNG";
import email from "../assets/email.PNG";
import "./Services.css";

const Example = () => {
  return (
    <>
      
      <div className="d-view ">
        <section
          style={{ background: "#000", color: "#fff", padding: "50px 0" }}
        >
          <Container>
            <Typography variant="h6" align="center" className="main-head">
              Services
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className="sub-head"
              style={{ marginBottom: "30px", padding: "1%" }}
            >
              Strategic Services drive digital success with tailored,
              comprehensive approaches.
            </Typography>

            <Row className="justify-content-center g-4">
              <Col xs={12} sm={6} md={3} className="text-center clr">
                <img src={seo} alt="SEO Marketing" className="service-img" />
                <Typography variant="h6">SEO Marketing</Typography>
              </Col>
              <Col xs={12} sm={6} md={3} className="text-center clr">
                <img
                  src={content}
                  alt="Content Marketing"
                  className="service-img"
                />
                <Typography variant="h6">Content Marketing</Typography>
              </Col>
              <Col xs={12} sm={6} md={3} className="text-center clr">
                <img
                  src={media}
                  alt="Social Media Management"
                  className="service-img"
                />
                <Typography variant="h6">Social Media Management</Typography>
              </Col>
              <Col xs={12} sm={6} md={3} className="text-center clr">
                <img src={ppc} alt="PPC" className="service-img" />
                <Typography variant="h6">PPC</Typography>
              </Col>
              <Col xs={12} sm={6} md={3} className="text-center clr">
                <img
                  src={email}
                  alt="Email Marketing"
                  className="service-img"
                />
                <Typography variant="h6">Email Marketing</Typography>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
     
      <div className="m-view">
        <section
         
          style={{ background: "#000", color: "#fff", padding: "30px 0" }}
        >
          <Container>
            <Box
              sx={{
                backgroundImage: `url('/images/images.jfif')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "20vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                color: "white",
                textAlign: "center",
                padding: 2,
                px: { xs: 3, md: 6 },
              }}
            >
              <Typography variant="h6" align="center" className="main-head">
                Services
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className="sub-head"
                style={{ marginBottom: "30px", padding: "1%", color: "#ccc" }}
              >
                Strategic Services drive digital success with tailored,
                <br />
                comprehensive approaches.
              </Typography>
            </Box>

            <Row className="justify-content-center g-4 pad-5">
             
              {[
                {
                  img: seo,
                  title: "SEO Marketing",
                  desc: "Enhance your visibility and rank higher on search engines with our expert SEO services. We optimize your site's content,structure, and performance to attract more organic traffic, ensuring your business stands out in search results.",
                },
                {
                  img: content,
                  title: "Content Marketing",
                  desc: "Engage your audience with high-quality,valuable content that drives traffic and builds trust.Our content marketing strategies include blog posts, articles,infographics, and more, all designed to resonate with your target market and convert visitors into loyal customers. ",
                },
                {
                  img: media,
                  title: "Social Media Management",
                  desc: "Build a strong online presence with our social media management services. We create and manage content across platforms like Facebook,Instragram,Twitter, and LinkedIn, ensuring your brand connects with your audience and drives meaningful engagement.",
                },
                {
                  img: ppc,
                  title: "PPC(Pay-Per-Click)",
                  desc: "Maximize Your ROI with targeted PPC campaigns. We design and manage ads on platforms like Google Ads and social media, ensuring your business reaches the right audience at the right time for optimal conversions.",
                },
                {
                  img: email,
                  title: "Email Marketing",
                  desc: "Reach your customers directly with personalized email campaigns. Our email marketing services include crafting compelling messages, segmenting audiences, and analyzing performance to boost engagement and drive repeat business.",
                },
              ].map((service, index) => (
                <Col key={index} xs={12} sm={12} md={12} lg={3}>
                  <div className="dis-flex">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="service-icon"
                    />
                    <Typography variant="h6">{service.title}</Typography>
                  </div>
                  <Typography variant="h6" sx={{ color: "#ccc" ,fontSize:"16px"}}>
                    {service.desc}
                  </Typography>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      fontSize: { xs: "1rem", md: "1rem" },
                      background: "#b9fd50",
                      color: "#000",
                      fontWeight:"700",
                      width: "100%",
                      
                      textTransform: "none",
                      mt: 1,
                    }}
                  >
                    Read More
                  </Button>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Example;
