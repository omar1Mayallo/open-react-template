import React from "react";
import {FaQuoteLeft} from "react-icons/fa";
import {AnimationOnScroll} from "react-animation-on-scroll";

const TestimonialItem = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn">
      <div className="testimonial-item mb-4">
        <span className="d-block mb-3">
          <FaQuoteLeft size={30} />
        </span>
        <p>
          — Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum cillum dolore eu fugiat.
        </p>
        <hr />
        <div className="testimonial-person-project">
          <span>Roman Level </span> / <span>AppName</span>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default TestimonialItem;
