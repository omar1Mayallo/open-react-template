import React from "react";
import {Col, Row} from "react-bootstrap";
import ContainerSection from "../../Components/ContainerSection/ContainerSection";
import Head from "../../Components/Head/Head.component";
import TestimonialItem from "../../Components/TestimonialItem/TestimonialItem";

const Testimonials = () => {
  return (
    <ContainerSection secName={"testimonials-section"}>
      <Head
        tag="h2"
        title="Customer testimonials"
        text="Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare."
      />
      <Row>
        <Col md={6} lg={4}>
          <TestimonialItem />
        </Col>
        <Col md={6} lg={4}>
          <TestimonialItem />
        </Col>
        <Col md={6} lg={4}>
          <TestimonialItem />
        </Col>
      </Row>
    </ContainerSection>
  );
};

export default Testimonials;
