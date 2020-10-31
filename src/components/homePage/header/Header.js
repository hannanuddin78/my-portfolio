import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import Typing from "react-typing-animation";

const Header = () => {
  return (
    <Container className="header-container">
      <Row>
        <Col className="text-center">
          <h1>
            Hello, I'm{" "}
            <Typing>
              <span className="name-color">Hannan Uddin Akash</span>
            </Typing>
          </h1>
          <h2>I'm a full-stack web developer</h2>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-4">
          <div>
            <Button
              style={{ color: "white" }}
              href="https://www.linkedin.com/in/hannan-uddin-129843158/"
              variant="outline-secondary"
            >
              View My Linkedin Profile
              <span className="ml-3">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
