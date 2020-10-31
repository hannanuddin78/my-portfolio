import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../../homePage/contact/contactForm/ContactForm";
import Navbars from "../../homePage/navbar/Navbars";

const DetailsContact = () => {
  return (
    <>
      <div style={{ backgroundColor: "#1a2e4f" }}>
        <Navbars />
        <Container className="pb-5">
          <Row>
            <Col md={12} className="text-center mb-5">
              <h4>Feel free to contact me anytime</h4>
              <h1>Get in Touch</h1>
              <hr style={{ width: "85px", backgroundColor: "black", height: "3px" }} />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Row>
                <Col md={12} className="mb-4">
                  <h3 className="mb-3">Contact Info</h3>
                  <p>
                    Always available for freelance work if the right project <br /> comes along,
                    Feel free to contact me!
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <h5>Name</h5>
                  <h6>Hannan Uddin</h6>
                </Col>
                <Col md={5}>
                  <h5>Location</h5>
                  <h6>Chittagong,Bangladesh</h6>
                </Col>
                <Col md={3}>
                  <h5>Call Me</h5>
                  <h6>8801640693111</h6>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <h2 className="mb-3">Message Me</h2>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DetailsContact;
