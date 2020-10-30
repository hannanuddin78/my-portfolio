import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact-container">
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
            <div className="contact-form r mb-5">
              <Form>
                <Form.Group>
                  <Form.Control type="name" placeholder="Name" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={3} placeholder="Your message" />
                </Form.Group>
                <Button className="float-right" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
