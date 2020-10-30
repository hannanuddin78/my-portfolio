import React from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import resume from "../../../image/resume/Update Resume of Hannan_Uddin.pdf";

const Navbars = () => {
  return (
    <div className="bg-dark">
      <Container className="mb-5">
        <Row>
          <Col md={12}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link className="mr-4 " href="/">
                    HOME
                  </Nav.Link>
                  <Nav.Link className="mr-4 " href="/about">
                    ABOUT
                  </Nav.Link>
                  <Nav.Link className="mr-4 " href="/portfolio">
                    PORTFOLIO
                  </Nav.Link>
                  <Nav.Link className="mr-4 " href="/blog">
                    BLOG
                  </Nav.Link>
                  <Nav.Link href="/contact ">CONTACT</Nav.Link>
                </Nav>
                <Nav className="btn cv-btn">
                  <Nav.Link href={resume} download>
                    Download CV
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbars;
