import React from "react";
import { Link } from "react-router-dom";

import "./PerfumeDetails.css";

const perfumeDetails = props => {
  let contentComments = props.perfume.users.map(el => {
    return (
      <>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{el.username}</h5>
        </div>
        <p className="mb-1">{el.comment}</p>
        <hr />
      </>
    );
  });

  return (
    <div className="card text-white bg-secondary mb-3">
      <div className="card-header bg-primary">
        <h1 className="text-white">{props.perfume.name.toLocaleUpperCase()}</h1>
      </div>
      <div className="card-body text-black bg-secondary">
        <div className="row">
          <div className="col-md-4">
            <h4 className="card-title">
              {props.perfume.role.toLocaleUpperCase()}
            </h4>
          </div>
          <div className="col-md-4" />
          <div className="col-md-4">
            <Link to="/" className="float-right clearfix">
              Go Back
            </Link>
          </div>
        </div>
        <p className="card-text">{props.perfume.description}</p>
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
            <img
              className="img-circle"
              src={props.perfume.imageUrl}
              alt={props.perfume.name}
            />
          </div>
          <div className="col-md-2" />
        </div>
      </div>
      <div className="card-body text-black">
        <p>
          Total rating {props.perfume.rating} out of{" "}
          {props.perfume.users.length} votes
        </p>
        <h4>Comments</h4>
        <hr />
        <div className="list-group text-black">
          <p>{contentComments}</p>
        </div>
      </div>
      <div className="card-body text-black">
        <div className="row">
          <div className="col-md-2">
            <span
              style={{
                padding: 0,
                margin: 0,
                cursor: "pointer",
                color: "grey"
              }}
            >
              <i class="fas fa-heart fa-3x" />
            </span>
          </div>
          <div className="col-md-4" />
          <div className="col-md-6">
            <div className="float-right clearfix text-black-50">
              <p>STAR RATING</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default perfumeDetails;
