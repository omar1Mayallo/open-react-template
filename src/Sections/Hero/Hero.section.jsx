import React from "react";
import ContainerSection from "../../Components/ContainerSection/ContainerSection";
import Head from "../../Components/Head/Head.component";
import ReactPlayer from "react-player/youtube";
import {Button, Row} from "react-bootstrap";

const Hero = () => {
  return (
    <ContainerSection secName={"hero-section"}>
      <Head
        tag="h1"
        title="Landing template for "
        text="Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
        spanText="startups"
      />
      <div className="hero-btn-container text-center my-5">
        <Button className="mb-3">Get Started</Button>
        <Button className="mb-3">View on github</Button>
      </div>
      <Row className="my-5">
        <ReactPlayer
          className="mx-auto"
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        />
      </Row>
    </ContainerSection>
  );
};

export default Hero;
