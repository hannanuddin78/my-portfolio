import React from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Navbar from "../../homePage/navBarMenu/navBarMenu";
import projects from "../../../fakeData/projects/projects";
import SeeProjects from "./seeProjects/SeeProjects";

const AllProjects = () => {
  const [allProject] = useState(projects);
  return (
    <>
      <div style={{ backgroundColor: "#2e343d" }}>
        <Navbar />
        <Container className="pb-5">
          <Row>
            {allProject.map((project) => (
              <SeeProjects key={project.id} project={project} />
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AllProjects;
