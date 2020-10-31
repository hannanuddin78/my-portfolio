import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PowerWork from "../../homePage/about/power/powerWork/PowerWork";
import Navbars from "../../homePage/navbar/Navbars";
import MySkill from "./mySkill/MySkill";
import WhoAmI from "./whoAmI/WhoAmI";

const DetailsAbout = () => {
  return (
    <>
      <div style={{ backgroundColor: "#091414" }}>
        <Navbars />
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
