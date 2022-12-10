import React from "react";

const Head = ({tag, title, text, spanText}) => {
  return (
    <div className="section-head text-center mx-auto my-2">
      {tag === "h1" ? (
        <h1>
          {title}
          <span>{spanText}</span>
        </h1>
      ) : (
        <h2>{title}</h2>
      )}
      <p className="mx-auto">{text}</p>
    </div>
  );
};

export default Head;
