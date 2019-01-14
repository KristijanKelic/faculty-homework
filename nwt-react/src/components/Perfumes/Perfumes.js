import React from "react";
import Perfume from './Perfume/Perfume';

const perfumes = props => {
  let content = <p>No items found</p>
  if (props.perfumes.length > 0) {
    content = props.perfumes.map(el => {
      return <Perfume key={el.id} perfume={el} />
    })
  }

  return <div>{content}</div>
}

export default perfumes;
