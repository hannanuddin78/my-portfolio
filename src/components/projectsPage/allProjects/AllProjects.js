import React from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import projectes from "../../../fakedata/project/project";
import Navbars from "../../homePage/navbar/Navbars";
import SeeProjects from "./seeProjects/SeeProjects";

const AllProjects = () => {
  const [allProject, setAllProjects] = useState(projectes);
  return (
    <>
      <div style={{ backgroundColor: "#2e343d" }}>
        <Navbars />
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
