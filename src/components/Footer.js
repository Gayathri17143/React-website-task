import React from "react";
import { Container, Button } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import logo from "../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="footer-top">
        <Container>
          <div className="footer-top-content">
            <div className="footer-top-text">
              <h3 className="main-heading">
                "Stand out online and make
                <br />
                an impact"
              </h3>
              <p className="paragraph">David Smith - CEO of a Tech Startup</p>
              <p className="paragraph1">
                Jump on a membership and start requesting designs right away!
              </p>
              <Button
                variant="contained"
                color="success"
                sx={{
                  fontSize: { xs: "1rem", md: "1rem" },
                  padding: "10px",
                  fontWeight: "600",
                  background: "#b9fd50",
                  color: "#000",
                  textTransform: "none",
                  borderRadius: "10px",
                }}
              >
                See Pricing <ArrowCircleRightIcon />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="footer-bottom">
        <div className="foot-container">
          <div className="foot-item">
            <img src={logo} alt="logo" className="logo" />
            <div className="foot-text1">
              Click It - is a leading digital marketing agency dedicated to
              driving success for businesses online. With expertise in SEO,
              PPC, social media, content creation, and more, we offer tailored
              solutions to maximize ROI. In the USA, UK, Canada working with
              top-tier clients, from start-ups to enterprises.
            </div>
          </div>

          <div className="foot-item">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="menu">
              <li>
                <a href="/about" className="foot-text1">
                  SEO Marketing
                </a>
              </li>
              <li>
                <a href="/contact" className="foot-text1">
                  Research Topic Trends
                </a>
              </li>
              <li>
                <a href="/privacypolicy" className="foot-text1">
                  Email Marketing
                </a>
              </li>
              <li>
                <a href="/privacypolicy" className="foot-text1">
                  Google PPC
                </a>
              </li>
            </ul>
          </div>

          <div className="foot-item">
            <h3 className="footer-heading">Our Location</h3>
            <ul className="menu">
              <li>
                <a href="/about" className="foot-text1">
                  USA
                </a>
              </li>
              <li>
                <a href="/contact" className="foot-text1">
                  UK
                </a>
              </li>
              <li>
                <a href="/privacypolicy" className="foot-text1">
                  Canada
                </a>
              </li>
              <li>
                <a href="/privacypolicy" className="foot-text1">
                  Virtual
                </a>
              </li>
            </ul>
          </div>

          <div className="foot-item">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="menu">
              <li>
                <div className="foot-text1">info@Kronix.com</div>
                <div className="foot-text1">(001)1231 3435</div>
              </li>
            </ul>
            <ul className="icons">
              <li>
                <i className="fa-brands fa-facebook"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i>
              </li>
              <li>
                <i className="fa-brands fa-dribbble"></i>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <ul className="menus">
            <li>
              <a href="/" className="foot-text1">Process</a>
            </li>
            <li>
              <a href="/" className="foot-text1">Benefits</a>
            </li>
            <li>
              <a href="/" className="foot-text1">Services</a>
            </li>
            <li>
              <a href="/" className="foot-text1">Portfolio</a>
            </li>
            <li>
              <a href="/" className="foot-text1">FAQ</a>
            </li>
          </ul>
          <div className="footer-bottom-text">
            © 2024 RajaramanR3 - All Rights Reserved
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
