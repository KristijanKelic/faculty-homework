import React, { Component } from "react";
import "./App.css";

import data from "../assets/perfumes.json";
import Header from "../components/Header/Header";
import Perfumes from "../components/Perfumes/Perfumes";
import Favorites from "../components/Favorites/Favorites";

class App extends Component {
  state = {
    perfumesList: [],
    filteredList: []
  };

  componentWillMount() {
    this.setState({ perfumesList: data, filteredList: data });
  }
  searchFilterHandler = event => {
    let helper = this.state.perfumesList.filter(el => {
      return (
        el.name
          .toLocaleLowerCase()
          .includes(event.target.value.toLocaleLowerCase()) ||
        el.description
          .toLocaleLowerCase()
          .includes(event.target.value.toLocaleLowerCase())
      );
    });
    this.setState({ filteredList: helper });
  };
  render() {
    return (
      <div>
        <Header change={this.searchFilterHandler} />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Perfumes perfumes={this.state.filteredList} />
            </div>
            <div className="col-md-4">
              <Favorites perfume={this.state.perfumesList[0]} flag={true} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
