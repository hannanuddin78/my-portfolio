import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col } from "react-bootstrap";

const Power = ({ power }) => {
  return (
    <Col lg={3} sm={6} className="text-center mb-5">
      <div className="hexagon power-icon mb-4">
        <FontAwesomeIcon icon={power.icon} />
      </div>
      <h2>{power.title}</h2>
      <p>{power.details}</p>
    </Col>
  );
};

export default Power;
// 
