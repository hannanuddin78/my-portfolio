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
            <p className="view-btn">
              View My Work
              <span className="ml-3">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
