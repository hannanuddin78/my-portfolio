import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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
        <Col className="text-center">
          <div className="btn">
            <a
              style={{ textDecoration: "none" }}
              className="view-btn"
              href="https://www.linkedin.com/in/hannan-uddin-129843158/"
            >
              View My Linkedin Profile
              <span className="ml-3">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
