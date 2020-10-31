import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col } from "react-bootstrap";

const Power = ({ power }) => {
  return (
    <Col md={3} className="text-center mb-5">
      <div className="hexagon power-icon mb-4">
        <FontAwesomeIcon icon={power.icon} />
      </div>
      <h2>{power.title}</h2>
      <p>{power.details}</p>
    </Col>
  );
};

export default Power;

// import fast from "../../../image/icon/speed.png";
// import responsive from "../../../image/icon/download.jpg";
// import light from "../../../image/icon/light-11-91412.webp";
// import rocket from "../../../image/icon/rocket-906-738952.webp";
// import Power from "./power/Power";
