import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

const ViewWork = ({ view }) => {
  return (
    <Col md={4} className="mb-5">
      <Zoom left>
        <Card>
          <img className="img-fluid" src={view.img} alt="" />
          <div className="card-hover d-flex align-items-center justify-content-center">
            <div>
              <h3>{view.title}</h3>
              <Button
                href="/portfolio"
                className="text-white d-flex justify-content-center"
                variant="outline-success"
              >
                View Details
              </Button>
            </div>
          </div>
        </Card>
      </Zoom>
    </Col>
  );
};

export default ViewWork;
