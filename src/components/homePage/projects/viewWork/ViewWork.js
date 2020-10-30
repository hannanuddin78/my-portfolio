import React from "react";
import { Card, Col } from "react-bootstrap";

const ViewWork = ({ view }) => {
  return (
    <Col md={4} className="mb-5">
      <Card>
        <img src={view.img} alt="" />
      </Card>
    </Col>
  );
};

export default ViewWork;
