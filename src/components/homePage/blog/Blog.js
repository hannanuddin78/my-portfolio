import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <Container className="mb-5">
      <Row>
        <Col md={12} className="mb-5">
          <h1 className="text-center">BLOG</h1>
          <hr style={{ width: "60px", backgroundColor: "black", height: "3px" }} />
        </Col>
      </Row>
      <Row>
        <Col md={12} className="mb-5">
          <Card className="text-center p-5 m-auto  w-50">
            <h1>Update Blog Coming soon</h1>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
