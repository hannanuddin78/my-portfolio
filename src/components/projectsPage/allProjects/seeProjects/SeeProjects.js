import React from "react";
import { Col, Row } from "react-bootstrap";

const SeeProjects = ({ project }) => {
  return (
    <Col md={12} className="mb-5">
      <Row>
        <Col md={6} className="text-center">
          <img className="pr-img" src={project.img} alt="" />
        </Col>
        <Col md={6}>
          <h1 className="mb-4">{project.title}</h1>
          <h6>{project.description}</h6>
        </Col>
      </Row>
    </Col>
  );
};

export default SeeProjects;
