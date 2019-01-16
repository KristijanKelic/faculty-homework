import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import data from "../assets/perfumes.json";
import Header from "../components/Header/Header";
import Perfumes from "../components/Perfumes/Perfumes";
import Favorites from "../components/Favorites/Favorites";
import PerfumeDetails from "../components/PerfumeDetail/PerfumeDetails";

class App extends Component {
  state = {
    perfumesList: [],
    filteredList: [],
    favoritesList: []
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
  ratePerfumeHandler = (event, id) => {
    let perfume = this.state.perfumesList.find(el => +el.id === +id);
    let perfumeIndex = this.state.perfumesList.findIndex(el => +el.id === +id);

    let perfumes = this.state.perfumesList;

    perfume.users.push({
      username: "user",
      rating: event,
      comment: ""
    });

    perfumes[perfumeIndex] = perfume;
    this.setState({
      perfumesList: perfumes,
      filteredList: perfumes
    });
  };
  addToFavoritesHandler = id => {
    let favorites = this.state.favoritesList;
    if (favorites.find(el => +el.id === +id)) {
      let index = favorites.findIndex(el => +el.id === +id);
      favorites.splice(index, 1);
    } else {
      favorites.push(this.state.perfumesList.find(el => +el.id === +id));
    }
    this.setState({
      favoritesList: favorites
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header change={this.searchFilterHandler} />
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <Route
                  path="/"
                  exact
                  render={() => <Perfumes perfumes={this.state.filteredList} />}
                />
                <Route
                  path="/product/:id"
                  render={props => (
                    <PerfumeDetails
                      {...props}
                      perfume={
                        this.state.perfumesList[props.match.params.id - 1]
                      }
                      ratePerfume={event =>
                        this.ratePerfumeHandler(event, props.match.params.id)
                      }
                      addToFavorites={() =>
                        this.addToFavoritesHandler(props.match.params.id)
                      }
                      favorites={this.state.favoritesList}
                    />
                  )}
                />
                {/*<Perfumes perfumes={this.state.filteredList} />*/}
              </div>
              <div className="col-md-4">
                <Favorites
                  favPerfumes={this.state.favoritesList}
                  flag={this.state.favoritesList.length !== 0}
                />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
