import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <Container className="mb-5">
      <Row>
        <Col sm={12} className="mt-5 mb-5">
          <h1 className="text-center">BLOG</h1>
          <hr
            style={{ width: "60px", backgroundColor: "black", height: "3px" }}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="mb-5 text-center">
          <h1>Update Blog Coming soon</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
