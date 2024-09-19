import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import LayersIcon from "@mui/icons-material/Layers";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";

const BackgroundWithText = () => {
  return (
    <div style={{ background: "#000" }}>
      <Box
        sx={{
          backgroundImage: `url('/images/images.jfif')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          textAlign: "center",
          padding: { xs: 2, md: 3 },
          px: { xs: 3, md: 6 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 2,

            fontSize: { xs: "1.5rem", sm: "2rem", md: "3.5rem" },
          }}
        >
          <span style={{ color: "#b9fd50" }}>Boost</span> Your Brand With <br />{" "}
          Innovative <span style={{ color: "#b9fd50" }}>Digital Marketing</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            letterSpacing: "1px",
            color: "#ccc",
            padding: "10px",
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          Drive Engagement and Conversions with Advanced Digital
          <br /> Marketing Strategies.
        </Typography>
        <div style={{ display: "inline-flex" }}>
          <Button
            variant="contained"
            color="success"
            sx={{
              display: { xs: "block", md: "none" },
              fontSize: { xs: "0.8rem", md: "1rem" },
              background: "#000",
              color: "#fff",
              textTransform: "none",
              border: "1px solid #ccc",
              marginRight: "20px",
            }}
          >
            Our Works
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{
              fontSize: { xs: "0.8rem", md: "1rem" },
              background: "#b9fd50",
              color: "#000",
              textTransform: "none",
            }}
          >
            Start Now
          </Button>
        </div>

        <section>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              letterSpacing: "1px",
              color: "#fff",
              padding: "40px",
              fontSize: { xs: "0.6rem", md: "0.7rem" },
              display: "inline-flex",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                mb: 3,
                pr: 3,
              }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  width: "70px",
                  height: "2px",
                  backgroundColor: "#b9fd50",
                  mt: 1,
                }}
              />
            </Box>
            TRUSTED BY THOUSANDS OF COMPANIES
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
                  width: "70px",
                  height: "2px",
                  backgroundColor: "#b9fd50",
                  mt: 1,
                }}
              />
            </Box>
          </Typography>
        </section>
      </Box>
      <section
        style={{
          background: "#0a0a0a",
          color: "#ccc",
          padding: "20px 0",
          width: "70%",
          margin: "0 auto",
          borderRadius: "20px",
          marginTop: "-20px",
        }}
      >
        <Container>
          <Row className="justify-content-center g-3">
            <Col xs={6} sm={6} md={2} className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <LayersIcon style={{ marginRight: "8px" }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", sm: "0.8rem", md: "1rem" },
                  }}
                >
                  Layers
                </Typography>
              </div>
            </Col>
            <Col xs={6} sm={6} md={2} className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <HourglassFullIcon style={{ marginRight: "8px" }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", sm: "0.8rem", md: "1rem" },
                  }}
                >
                  Quotient
                </Typography>
              </div>
            </Col>
            <Col xs={6} sm={6} md={2} className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <JoinFullIcon style={{ marginRight: "8px" }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", sm: "0.8rem", md: "1rem" },
                  }}
                >
                  Circooles
                </Typography>
              </div>
            </Col>
            <Col xs={6} sm={6} md={2} className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <HourglassFullIcon style={{ marginRight: "8px" }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", sm: "0.8rem", md: "1rem" },
                  }}
                >
                  Hourglass
                </Typography>
              </div>
            </Col>
            <Col xs={6} sm={6} md={2} className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <LayersIcon style={{ marginRight: "8px" }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", sm: "0.8rem", md: "1rem" },
                  }}
                >
                  Command+R
                </Typography>
              </div>
            </Col>

            <Col
              xs={6}
              sm={6}
              md={2}
              className="d-md-none d-flex align-items-center"
            >
              <div className="d-flex align-items-center">
                <LayersIcon style={{ marginRight: "8px" }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", sm: "0.8rem", md: "1rem" },
                  }}
                >
                  Layers
                </Typography>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BackgroundWithText;
