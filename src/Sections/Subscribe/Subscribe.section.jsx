import React from "react";
import ContainerSection from "../../Components/ContainerSection/ContainerSection";
import {HiArrowSmRight} from "react-icons/hi";
const Subscribe = () => {
  return (
    <ContainerSection secName={"subscribe-section"} withoutHr>
      <div className="subs-container">
        <div className="subs-content">
          <p>For previewing layouts and visual?</p>
          <div className="input-block">
            <input type="text" placeholder="Enter your email" />
            <button>
              <HiArrowSmRight />
            </button>
          </div>
        </div>
      </div>
    </ContainerSection>
  );
};

export default Subscribe;
