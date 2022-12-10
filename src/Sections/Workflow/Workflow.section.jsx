import React from "react";
import {Col, Row} from "react-bootstrap";
import ContainerSection from "../../Components/ContainerSection/ContainerSection";
import Head from "../../Components/Head/Head.component";
import WorkflowItem from "../../Components/WorkflowItem/WorkflowItem";
import workflowImage1 from "../../utils/imgs/workflow-1.png";
import workflowImage2 from "../../utils/imgs/workflow-2.png";
import workflowImage3 from "../../utils/imgs/workflow-3.png";

const Workflow = () => {
  const images = [workflowImage1, workflowImage2, workflowImage3];
  const workflowList = images.map((img, idx) => {
    const getReverseState = () => {
      if (Number(idx) % 2) return true;
      else return false;
    };
    return (
      <Col xs={12} key={idx}>
        <WorkflowItem img={img} reverse={getReverseState()} />
      </Col>
    );
  });
  return (
    <ContainerSection secName={"workflow-section"}>
      <Head
        tag="h2"
        title="Workflow that just works"
        text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis."
      />
      <Row>{workflowList}</Row>
    </ContainerSection>
  );
};

export default Workflow;
