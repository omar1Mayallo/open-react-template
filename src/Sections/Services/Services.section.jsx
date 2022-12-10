import React from "react";
import {Col, Row} from "react-bootstrap";
import ContainerSection from "../../Components/ContainerSection/ContainerSection";
import Head from "../../Components/Head/Head.component";
import ServiceItem from "../../Components/ServiceItem/ServiceItem";
import {
  BiLike,
  BiWorld,
  BiPaperPlane,
  BiBarChartAlt2,
  BiBrain,
  BiDesktop,
} from "react-icons/bi";
const Services = () => {
  const servicesIcons = [
    BiLike,
    BiWorld,
    BiPaperPlane,
    BiBarChartAlt2,
    BiBrain,
    BiDesktop,
  ];
  const servicesList = servicesIcons.map((Icon, idx) => (
    <Col className="text-center my-3" md={6} lg={4} key={idx}>
      <ServiceItem
        Icon={Icon}
        title="Robust Workflow"
        text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
      />
    </Col>
  ));
  return (
    <ContainerSection secName={"services-section"}>
      <Head
        tag="h2"
        title="Build up the whole picture"
        text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis."
      />
      <Row>{servicesList}</Row>
    </ContainerSection>
  );
};

export default Services;
