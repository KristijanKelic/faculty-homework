import React from "react";

const favorites = props => {
  let content = null;
  if (props.flag) {
    content = props.favPerfumes.map(el => {
      return (
        <div key={el.id} className="list-group-item list-group-item-action" style={{cursor: "pointer"}}>
        <div className="row">
          <div className="col-md-4">
            <img
              style={{ width: "100%" }}
              src={el.imageUrl}
              alt={el.name}
            />
          </div>
          <div className="col-md-8">
            <div>
              <h6>{el.name}</h6>
            </div>
            <div>
              <p>
                Rating {el.rating} out of{" "}
                {el.users.length} votes
              </p>
            </div>
          </div>
        </div>
      </div>
      );
    })
  } else {
    content = (
      <div className="row bg-primary text-white">
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
