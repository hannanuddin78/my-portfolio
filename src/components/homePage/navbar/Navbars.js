import React from "react";
import "./Navbars.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import resume from "../../../image/resume/update_Resume of Hannan_Uddin.pdf";
import { NavLink } from "react-router-dom";

const Navbars = () => {
  return (
    <div className="bg-dark">
      <Container className="mb-5">
        <Row>
          <Col md={12}>
            <Navbar collapseOnSelect expand="lg" variant="dark">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <nav className="navbar mr-auto text-success">
                  <NavLink
                    exact
                    activeClassName="navbar__link--active"
                    className="navbar__link text-white"
                    to="/"
                  >
                    HOME
                  </NavLink>
                  <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link text-white"
                    to="/about"
                  >
                    ABOUT
                  </NavLink>
                  <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link text-white"
                    to="/portfolio"
                  >
                    PORTFOLIO
                  </NavLink>
                  <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link text-white"
                    to="/blog"
                  >
                    BLOG
                  </NavLink>
                  <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link text-white"
                    to="/contact"
                  >
                    CONTACT
                  </NavLink>
                </nav>
                <Nav>
                  <a href={resume} download className="btn btn-outline-success">
                    Download CV
                  </a>
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
