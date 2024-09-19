import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import customers from "../assets/customers.PNG";
import processes from "../assets/processes.PNG";
import experience from "../assets/experience.PNG";
import business from "../assets/business.PNG";
import client from "../assets/client.PNG";
import creative from "../assets/creative.PNG";
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <>
      <div className="d-view">
        <section style={{ background: "#222222", padding: "20px" }}>
          <Container>
            <Typography
              as="h2"
              style={{
                marginBottom: "20px",
                fontSize: "2rem",
                color: "#fff",
                textAlign: "left",
                paddingLeft: "7%",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Why Choose Us?
              <Box
                sx={{
                  textAlign: "center",
                  mb: 3,
                  pl: 3,
                }}
              >
                <Box
                  sx={{
                    display: "inline-block",
                    width: "100px",
                    height: "2px",
                    backgroundColor: "#fff",
                    mt: 1,
                  }}
                />
              </Box>
            </Typography>
            <Row className="mb-4 padd">
              <Col xs={12} sm={6} md={6}>
                <img
                  src={business}
                  alt="Business Solutions"
                  style={{
                    width: "80%",
                    margin: "0 auto",
                    display: "block",
                    borderRadius: "20px",
                  }}
                />
              </Col>
              <Col xs={12} sm={6} md={6}>
                <Typography className="head">
                  Solutions Tailored Specifically to Your Business Needs
                </Typography>
                <Typography className="para">
                  We provide customized solutions for your business needs,
                  ensuring relevance and success.
                </Typography>
                <Button className="btn">Read More</Button>
              </Col>
            </Row>

            <Row className="mb-4 padd">
              <Col xs={12} sm={6} md={6}>
                <Typography className="head">
                  Creative Excellence Elevates Every Project
                </Typography>
                <Typography className="para">
                  Creative excellence drives our work. From concept to
                  execution, we aim for exceptional results.
                </Typography>
                <Button className="btn">Read More</Button>
              </Col>
              <Col xs={12} sm={6} md={6}>
                <img
                  src={creative}
                  alt="Creative Excellence"
                  style={{
                    width: "80%",
                    margin: "0 auto",
                    display: "block",
                    borderRadius: "20px",
                  }}
                />
              </Col>
            </Row>

            <Row className="mb-4 padd">
              <Col xs={12} sm={6} md={6}>
                <img
                  src={client}
                  alt="Client Satisfaction"
                  style={{
                    width: "80%",
                    margin: "0 auto",
                    display: "block",
                    borderRadius: "20px",
                  }}
                />
              </Col>
              <Col xs={12} sm={6} md={6}>
                <Typography className="head">
                  Client Satisfaction is Our Main Focus
                </Typography>
                <Typography className="para">
                  Our main goal is your satisfaction, and we work tirelessly to
                  ensure that you are pleased with the results we achieve
                  together.
                </Typography>
                <Button className="btn">Read More</Button>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      <div className="m-view">
        <section style={{ background: "#fff", padding: "20px" }}>
          <Container>
            <h6
              style={{
                marginBottom: "20px",
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#000",
                textAlign: "left",
                paddingLeft: "5%",
                textDecoration: "underline",
              }}
            >
              Why Choose Us?
            </h6>
            <Row className="mb-4 padd">
              <Col xs={12} sm={12} md={12} className="text-center">
                <img
                  src={business}
                  alt="Business Solutions"
                  style={{
                    width: "100%",
                    margin: "0 auto",
                    display: "block",
                    borderRadius: "20px",
                  }}
                />
                <h4 className="head">
                  Solutions Tailored Specifically to Your Business Needs
                </h4>
                <p className="para">
                  We provide customized solutions for your business needs,
                  ensuring relevance and success.
                </p>
                <Button className="but">Read More</Button>
              </Col>
            </Row>

            <Row className="mb-4 padd">
              <Col xs={12} sm={12} md={12} className="text-center">
                <img
                  src={creative}
                  alt="Creative Excellence"
                  style={{
                    width: "100%",
                    margin: "0 auto",
                    display: "block",
                    borderRadius: "20px",
                  }}
                />
                <h4 className="head">
                  Creative Excellence Elevates Every Project
                </h4>
                <p className="para">
                  Creative excellence drives our work. From concept to
                  execution, we aim for exceptional results.
                </p>
                <Button className="but">Read More</Button>
              </Col>
            </Row>

            <Row className="mb-4 padd">
              <Col xs={12} sm={12} md={12} className="text-center">
                <img
                  src={client}
                  alt="Client Satisfaction"
                  style={{
                    width: "100%",
                    margin: "0 auto",
                    display: "block",
                    borderRadius: "20px",
                  }}
                />
                <h4 className="head">Client Satisfaction is Our Main Focus</h4>
                <p className="para">
                  Our main goal is your satisfaction, and we work tirelessly to
                  ensure that you are pleased with the results we achieve
                  together.
                </p>
                <Button className="but">Read More</Button>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      <section style={{ background: "#111204", paddingTop: "30px" }}>
        <Container>
          <Typography
            as="h6"
            style={{
              marginBottom: "20px",
              fontSize: "2rem",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Work with Click It New Tech
          </Typography>
          <Row className="justify-content-center align-items-center">
            <Col xs={12} sm={12} md={4} className="text-center mb-4">
              <img
                src={customers}
                alt="Happy Customers"
                style={{ width: "30%", marginBottom: "10px" }}
              />
              <Typography style={{ fontSize: "2rem", color: "#fff" }}>
                10,000+
              </Typography>
              <Typography style={{ color: "#fff" }}>Happy Customers</Typography>
            </Col>
            <Col xs={12} sm={12} md={4} className="text-center mb-4">
              <img
                src={processes}
                alt="Successful Processes"
                style={{ width: "30%", marginBottom: "10px" }}
              />
              <Typography style={{ fontSize: "2rem", color: "#fff" }}>
                20,000+
              </Typography>
              <Typography style={{ color: "#fff" }}>
                Successful Processes
              </Typography>
            </Col>
            <Col xs={12} sm={12} md={4} className="text-center mb-4">
              <img
                src={experience}
                alt="Experience"
                style={{ width: "40%", marginBottom: "10px" }}
              />
              <Typography style={{ fontSize: "2rem", color: "#fff" }}>
                10+ Years
              </Typography>
              <Typography style={{ color: "#fff" }}>of Experience</Typography>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ChooseUs;
