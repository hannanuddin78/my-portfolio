import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Power from "./power/Power";
import { Link } from "react-router-dom";
import PowerWork from "./power/powerWork/PowerWork";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "-90px", marginBottom: "40px" }}>
        <Row>
          <Col md={12} className="text-center mb-5">
            <h1>ABOUT</h1>
            <hr style={{ width: "85px", backgroundColor: "black", height: "3px" }} />
          </Col>
        </Row>
        <PowerWork />
        <Row>
          <Col md={12} className="text-center mb-5">
            <Link to="/about">
              <Button variant="secondary">See More About</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
