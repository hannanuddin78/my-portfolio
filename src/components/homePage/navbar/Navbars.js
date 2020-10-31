import React from "react";
import "./Navbars.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import resume from "../../../image/resume/Update Resume of Hannan_Uddin.pdf";
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
                  <Nav.Link>
                    <button href={resume} download type="button" class="btn btn-outline-success">
                      Download CV
                    </button>
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

{
  /* ; */
}

{
  /* <Nav className="mr-auto text-success">
      <Link as={Link} className="mr-4" to="/">
        Home
      </Link>
      <Link as={Link} className="mr-4" to="/about">
        About
      </Link>
      <Nav.Link as={Link} className="mr-4" to="/portfolio">
        PORTFOLIO
      </Nav.Link>
      <Nav.Link as={Link} className="mr-4" to="/blog">
        BLOG
      </Nav.Link>
      <Nav.Link as={Link} to="/contact">
        CONTACT
      </Nav.Link>
    </Nav> */
}

{
  /* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="sideNav" className="fixed-top">
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {navItems.map((navItem, index) => (
        <Nav.Link as={Link} to={navItem.href} key={index}>
          {navItem.name}
        </Nav.Link>
      ))}
    </Nav>
  </Navbar.Collapse>
</Navbar>; */
}

// <Nav className="mr-auto">
//   {navItems.map((navItem, index) => (
//     <Nav.Link to={navItem.href} key={index}>
//       {navItem.name}
//     </Nav.Link>
//   ))}
// </Nav>;
