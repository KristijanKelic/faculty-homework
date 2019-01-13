import React from "react";

const favorites = props => {
  let content = null;
  if (props.flag) {
    content = (
      <div className="list-group-item list-group-item-action" style={{cursor: "pointer"}}>
        <div className="row">
          <div className="col-md-4">
            <img
              style={{ width: "100%" }}
              src={props.perfume.imageUrl}
              alt={props.perfume.name}
            />
          </div>
          <div className="col-md-8">
            <div>
              <h6>{props.perfume.name}</h6>
            </div>
            <div>
              <p>
                Rating {props.perfume.rating} out of{" "}
                {props.perfume.users.length} votes
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <h6 style={{ textAlign: "center" }}>You have no favorite perfume</h6>
        </div>
        <div className="col-md-2" />
      </div>
    );
  }
  return (
    <div className="bg-primary" style={{padding: "20px"}}>
      <h2 className="text-white">Favorites</h2>
      <div className="list-group">{content}</div>
    </div>
  );
};

export default favorites;
