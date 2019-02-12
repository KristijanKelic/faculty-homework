import React from "react";
import { Link } from "react-router-dom";
import StarRating from "react-star-ratings";

import "./PerfumeDetails.css";

const perfumeDetails = props => {
  let contentReviews = props.perfume.users.map(el => {
    return (
      <div key={el.username} className="row">
        <div className="col-sm-2">
          <span>
            <i className="fas fa-user-circle fa-5x" />
          </span>
        </div>
        <div className="col-sm-10">
          <h5 className="mb-1">{el.username}</h5>
          <StarRating
            name={el.username}
            starDimension="15px"
            totalStars={5}
            disabled={true}
            rating={el.rating}
            starRatedColor="#2196F3"
            starEmptyColor="grey"
          />
          <p className="mb-1">{el.comment}</p>
        </div>
        <hr />
      </div>
    );
  });

  let userVoted = props.perfume.users.find(el => el.username === "user");
  let ratingToDisplay;
  if (userVoted) {
    ratingToDisplay = (
      <StarRating
        rating={userVoted.rating}
        starRatedColor="#2196F3"
        starEmptyColor="grey"
        starHoverColor="#2196F3"
        disabled={true}
        numberOfStars={5}
        name="voted-rating"
      />
    );
  } else {
    ratingToDisplay = (
      <StarRating
        rating={0}
        starRatedColor="#2196F3"
        starHoverColor="#2196F3"
        starEmptyColor="grey"
        changeRating={props.ratePerfume}
        numberOfStars={5}
        name="rating"
      />
    );
  }

  let favorited = null;
  if (props.favorites.length > 0) {
    favorited = props.favorites.find(el => el.id === props.perfume.id);
  }
  let classFavorited = "grey";
  if (favorited) classFavorited = "favorited";

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
          Total rating {props.perfume.rating} based on{" "}
          {props.perfume.users.length} reviews
        </p>
        <h4>Reviews</h4>
        <hr />
        <div className="list-group text-black">
          <div>{contentReviews}</div>
        </div>
      </div>
      <div className="card-body text-black">
        <div className="row">
          <div className="col-md-2">
            <span
              onClick={props.addToFavorites}
              style={{
                padding: 0,
                margin: 0,
                cursor: "pointer"
              }}
              className={classFavorited}
            >
              <i className="fas fa-heart fa-3x" />
            </span>
          </div>
          <div className="col-md-4" />
          <div className="col-md-6">
            <div className="float-right clearfix text-black-50">
              {ratingToDisplay}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default perfumeDetails;
