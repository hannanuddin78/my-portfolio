import React from "react";
import { Card, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

const ViewWork = ({ view }) => {
  return (
    <Col md={4} className="mb-5">
      <Zoom left>
        <Card>
          <img className="img-fluid" src={view.img} alt="" />
        </Card>
      </Zoom>
    </Col>
  );
};

export default ViewWork;
