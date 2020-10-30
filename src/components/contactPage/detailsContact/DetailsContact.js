import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Contact from "../../homePage/contact/Contact";
import Navbars from "../../homePage/navbar/Navbars";

const DetailsContact = () => {
  return (
    <div className="pb-5">
      <Navbars />
      <Container>
        <Row>
          <Col md={6}></Col>
          <Col md={6}>
            <Contact />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailsContact;
