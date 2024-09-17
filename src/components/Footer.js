import React from "react";

import "./Footer.css";
import { Container } from "@mui/material";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <>
      {/* <Container> */}

      <div className="foot-container pad">
        <div className="foot-item">
          <img src={logo} alt="logo" style={{ marginTop: "20px" }}></img>
          <div className="foot-text1">
            TechConnect Internet Private Limited, Buildings Alyssa, Outer Ring
            Road, Devarabeesanahalli Village, Bengaluru, 560103,
            Karnataka, India
          </div>
        </div>
        <div className="foot-item">
          <ul className="menu">
            <h3 style={{ color: "green" }}>fryerhg</h3>
            <li>
              <a href="/about">
                <i class="fa-regular  ">
                  <div className="foot-text1">About Us</div>
                </i>
              </a>
              <a href="/contact">
                <i class="fa-regular  ">
                  <div className="foot-text1">Contact Us</div>
                </i>
              </a>

              <a href="/privacypolicy">
                <i class="fa-regular  ">
                  <div className="foot-text1">Privacy Policy</div>
                </i>
              </a>
              <a href="/privacypolicy">
                <i class="fa-regular  ">
                  <div className="foot-text1">Privacy Policy</div>
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="foot-item">
          <ul className="menu">
            <h3 style={{ color: "green" }}>fryerhg</h3>
            <li>
              <a href="/about">
                <i class="fa-regular  ">
                  <div className="foot-text1">About Us</div>
                </i>
              </a>
              <a href="/contact">
                <i class="fa-regular  ">
                  <div className="foot-text1">Contact Us</div>
                </i>
              </a>

              <a href="/privacypolicy">
                <i class="fa-regular  ">
                  <div className="foot-text1">Privacy Policy</div>
                </i>
              </a>
              <a href="/privacypolicy">
                <i class="fa-regular  ">
                  <div className="foot-text1">Privacy Policy</div>
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="foot-item">
        <ul className="menu">
          <li>
            <a>
              <i class="fa-regular fa-phone">
                <div className="foot-text">+123 488 9652</div>
              </i>
               
              <i class="fa-regular fa-envelope">
                <div className="foot-text">info@techconnect.com</div>
              </i>
             
            </a>
          </li>
        </ul>
        <ul className="icons">
          <li>
            
              <a>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
              </a>
             
          </li>
        </ul>
        </div>
      </div>
      <div className="dis-flx bor-top">
      <ul className="menu">
          <li>
            <a className="foot">
              
                <div className="foot-text">About Us</div>
              
                <div className="foot-text">Our Team</div>
              
                <div className="foot-text">Maintance Mode</div>
               
                <div className="foot-text">Privacy Policy</div>
               
            </a>
          </li>
        </ul>

        
        <div className=" ">
          © 2023 TechConnect Theme. All Rights Reserved.
        </div>
      </div>
      {/* </Container> */}
    </>
  );
};

export default Footer;
