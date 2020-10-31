import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./contactForm/ContactForm";

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col md={12} className="text-center mb-5">
          <h1>CONTACT</h1>
          <hr style={{ width: "85px", backgroundColor: "black", height: "3px" }} />
          <h5 className="text-white">Have a question or want to work together?</h5>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="mb-5">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
