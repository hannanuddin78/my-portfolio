import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PowerWork from "../../homePage/about/power/powerWork/PowerWork";
import MySkill from "./mySkill/MySkill";
import WhoAmI from "./whoAmI/WhoAmI";
import Navbar from "../../homePage/navBarMenu/navBarMenu";

const DetailsAbout = () => {
  return (
    <>
      <div style={{ backgroundColor: "#091414" }}>
        <Navbar />
        <Container className="pb-5">
          <Row>
            <Col md={12}>
              <PowerWork />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <WhoAmI />
            </Col>
            <Col md={6}>
              <MySkill />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DetailsAbout;
