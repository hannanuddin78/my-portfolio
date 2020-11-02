import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Typing from "react-typing-animation";
import Spin from "react-reveal/Spin";
import Slide from "react-reveal/Slide";
import linKeDin from "../../../image/svg/linkedin.png";
import OcToCat from "../../../image/svg/Octocat.png";
import faceBook from "../../../image/svg/icons8-facebook-50.png";
import myImg from "../../../image/11111.JPG";

const Header = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={12} className="text-center">
                <h1 className="mb-3">
                  Hello, I'm <br />
                  <Typing>
                    <span className="name-color">Hannan Uddin Akash</span>
                  </Typing>
                </h1>
                <Spin>
                  <h2>I'm a full-stack web developer</h2>
                </Spin>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center mt-5 ">
                <Slide left>
                  <Button
                    style={{ color: "white", marginBottom: "25px" }}
                    href="https://www.linkedin.com/in/hannan-uddin-129843158/"
                    variant="outline-primary"
                  >
                    View My Linkedin Profile
                    <img className="svg-icon" src={linKeDin} alt="" />
                  </Button>
                </Slide>
                <Slide right>
                  <Button
                    style={{ color: "white", marginBottom: "25px" }}
                    variant="outline-info"
                    href="https://github.com/hannanuddin78"
                  >
                    View My GitHub Profile
                    <img className="svg-icon" src={OcToCat} alt="" />
                  </Button>
                </Slide>
                <Slide bottom>
                  <Button
                    style={{ color: "white" }}
                    variant="outline-success"
                    href="https://www.facebook.com/syed.hannan.uddin78/"
                  >
                    Connect My FaceBook
                    <img className="svg-icon" src={faceBook} alt="" />
                  </Button>
                </Slide>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="d-flex  justify-content-center my-image">
            <img style={{ height: "70%" }} className="img-fluid" src={myImg} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
