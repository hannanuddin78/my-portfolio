import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SeeProjects = ({ project }) => {
  return (
    <Col md={12} className="mb-5">
      <Row>
        <Col md={6} className="text-center">
          <img className="pr-img" src={project.img} alt="" />
        </Col>
        <Col md={6}>
          <h1 className="mb-4">{project.title}</h1>
          <h5 className="mb-3">{project.description}</h5>
          <h6 className="mb-4">
            <span style={{ fontWeight: "bold", marginRight: "10px" }}>Technology :</span>
            {project.use}
          </h6>
          <a style={{ textDecoration: "none" }} href={project.link}>
            View Site
          </a>
        </Col>
      </Row>
    </Col>
  );
};

export default SeeProjects;
