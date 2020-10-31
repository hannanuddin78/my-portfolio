import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Power from "./power/Power";
import { Link } from "react-router-dom";
import PowerWork from "./power/powerWork/PowerWork";

const About = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center mb-3">
          <h1>ABOUT</h1>
          <hr style={{ width: "85px", backgroundColor: "black", height: "3px" }} />
          <div className="text-center mt-4 mb-5">
            <Link to="/about">
              <Button variant="secondary">See More About</Button>
            </Link>
          </div>
        </Col>
      </Row>
      <PowerWork />
    </Container>
  );
};

export default About;
