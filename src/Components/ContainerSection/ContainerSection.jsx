import React from "react";
import {Container} from "react-bootstrap";

const ContainerSection = ({secName, withoutHr, children}) => {
  return (
    <>
      <section className={`${secName} my-5`}>
        <Container>
          {children}
          {withoutHr || <hr />}
        </Container>
      </section>
    </>
  );
};

export default ContainerSection;
