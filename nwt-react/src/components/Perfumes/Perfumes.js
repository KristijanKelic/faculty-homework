import React from "react";
import Perfume from "./Perfume/Perfume";

const perfumes = props => {
  let content = "";
  if (props.first) {
    content = <h1 style={{ textAlign: "center" }}>Loading..</h1>;
  } else {
    content = (
      <h1 style={{ textAlign: "center" }}>
        No items matching your search criteria
      </h1>
    );
  }
  if (props.perfumes.length > 0) {
    content = props.perfumes.map(el => {
      return <Perfume key={el.id} perfume={el} {...props} />;
    });
  }

  return <div>{content}</div>;
};

export default perfumes;
