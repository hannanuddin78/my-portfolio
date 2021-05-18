import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import LightSpeed from "react-reveal/LightSpeed";

const SeeProjects = ({ project }) => {
  return (
    <Col md={12}>
      <Row className="pdDetails mt-5 justify-content-center align-items-center">
        <Col md={6} className="text-center">
          <LightSpeed left>
            <img className="pr-img" src={project.img} alt="" />
          </LightSpeed>
        </Col>

        <Col md={6} className="">
          <LightSpeed right>
            <h1 className="mb-4">{project.title}</h1>
            <h5 className="mb-3" style={{ textAlign: "justify" }}>
              <span
                style={{
                  fontSize: "20px",
                  marginRight: "10px",
                  color: "#007bff",
                }}
              >
                Project Details :
              </span>
              {project.description}
            </h5>
            <h6 className="mb-4">
              <span
                style={{
                  fontSize: "20px",
                  marginRight: "10px",
                  color: "#007bff",
                }}
              >
                Technology :
              </span>
              {project.use}
            </h6>
            <Button variant="primary" size="sm" href={project.link}>
              View Site
            </Button>
          </LightSpeed>
        </Col>
      </Row>
    </Col>
  );
};

export default SeeProjects;
