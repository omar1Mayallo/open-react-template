import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";

const ServiceItem = ({Icon, title, text}) => {
  const CustomIconTag = Icon;
  return (
    <AnimationOnScroll animateIn="animate__fadeIn">
      <div className="service-card">
        <div className="service-icon-circle">
          <CustomIconTag />
        </div>
        <div className="service-info">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default ServiceItem;
