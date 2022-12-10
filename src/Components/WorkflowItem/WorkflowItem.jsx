import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import {AnimationOnScroll} from "react-animation-on-scroll";

const WorkflowItem = ({img, reverse}) => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn">
      <Row
        className={`workflow-item align-items-center${
          reverse ? " reverse" : ""
        }`}
      >
        <Col md={6}>
          <div className="workflow-info p-3">
            <p>LIGHTNING FAST WORKFLOW</p>
            <h3>Data-driven insights</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo
              eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="p-3">
            <Image src={img} alt="workflow-image" width="100%" height="auto" />
          </div>
        </Col>
      </Row>
    </AnimationOnScroll>
  );
};

export default WorkflowItem;
