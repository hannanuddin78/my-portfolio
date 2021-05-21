import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./contactForm/ContactForm";

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col md={12} className="text-center mb-5">
          <h1>CONTACT</h1>
          <hr
            style={{ width: "85px", backgroundColor: "black", height: "3px" }}
          />
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-5">
          <ContactForm />
        </Col>
        <Col md={6} className="mb-5">
          <h5 className="text-white mb-3 xs_h5">
            A contact page is a common web page on a website for visitors to
            contact the organization or individual providing the website. The
            page contains one or more of the following items: an e-mail address.
            a telephone number. ... a contact form for a text message or
            inquiry.
          </h5>
          <p className="xs_h5">hannanuddin78@gmail.com</p>
          <p className="xs_h5">Chittagong, Bangladesh</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
