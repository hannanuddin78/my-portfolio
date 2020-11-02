import React from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import projectes from "../../../fakedata/project/project";
import ViewWork from "./viewWork/ViewWork";

const Projects = () => {
  const [project, setProject] = useState(projectes);
  return (
    <Container className="mb-5">
      <Row>
        <Col md={12} className="mb-4">
          <h1 className="text-center">PROJECTS</h1>
          <hr style={{ width: "85px", backgroundColor: "black", height: "3px" }} />
        </Col>
      </Row>
      <Row>
        {project.slice(0, 3).map((view) => (
          <ViewWork key={view.id} view={view} />
        ))}
      </Row>
      <Row>
        <Col md={12} className="text-center ">
          <Link to="/portfolio">
            <Button variant="secondary">See More Project</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
