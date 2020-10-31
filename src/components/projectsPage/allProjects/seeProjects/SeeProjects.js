import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const SeeProjects = ({ project }) => {
  return (
    <Col md={12} className="pb-5">
      <Row>
        <Col md={6} className="text-center">
          <img className="pr-img img-fluid" src={project.img} alt="" />
        </Col>
        <Col md={6}>
          <h1 style={{ color: "#6610f2" }} className="mb-4">
            {project.title}
          </h1>
          <h5 className="mb-3">
            {" "}
            <span style={{ fontSize: "20px", marginRight: "10px", color: "#007bff" }}>
              Project Details :
            </span>
            {project.description}
          </h5>
          <h6 className="mb-4">
            <span style={{ fontSize: "20px", marginRight: "10px", color: "#007bff" }}>
              Technology :
            </span>
            {project.use}
          </h6>
          <Button variant="primary" size="sm" href={project.link}>
            View Site
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default SeeProjects;
