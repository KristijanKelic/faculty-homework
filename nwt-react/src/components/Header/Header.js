import React from "react";

import "./Header.css";
import logo from '../../assets/icon.png';

const header = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="col-md-2">
      <span className="navbar-brand" href="#">
        <img alt="brand" src={logo} className="img-fluid" />
        Perfume store
      </span>
    </div>
    <div className="col-md-7" />
    <div className="col-md-3">
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search"
        onChange={props.change}
      />
    </div>
  </nav>
);

export default header;
