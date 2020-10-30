import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import projectes from "../../../fakedata/project/project";
import ViewWork from "./viewWork/ViewWork";

const Projects = () => {
  const [project, setProject] = useState(projectes);
  return (
    <Container className="mb-5">
      <Row>
        <Col md={12} className="mb-5">
          <h1 className="text-center">PROJECTS</h1>
          <hr style={{ width: "85px", backgroundColor: "black", height: "3px" }} />
        </Col>
      </Row>
      <Row>
        {project.slice(0, 3).map((view) => (
          <ViewWork key={view.id} view={view} />
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
