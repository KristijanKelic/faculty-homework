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
    favoritesList: [
      {
        id: 1,
        name: "Dior homme intense",
        role: "men",
        description:
          "Dior Homme by Christian Dior is a Woody Floral Musk fragrance for men. Dior Homme was launched in 2011. The nose behind this fragrance is Francois Demachy. Top notes are lavender, sage and bergamot; middle notes are iris, amber and cacao; base notes are vetiver, patchouli and leather.",
        imageUrl: "https://fimgs.net/mdimg/perfume/375x500.13015.jpg",
        rating: 5.0,
        users: [
          {
            username: "Christian",
            rating: 5,
            comment: "Very good"
          },
          {
            username: "Leonardno",
            rating: 5,
            comment: "I'm in love with this. Thumbs up"
          }
        ]
      },
      {
        id: 2,
        name: "Givenchy Pi",
        role: "men",
        description:
          "Oriental woody perfume Pi by the house of  is excellent for eternal explorers and fans of sensual experiments. Its geometric bottle with perfectly clear lines contains a woody, sensual scent. Basil, rosemary, tarragon and neroli introduce freshness into this generally warm, oriental composition with an accentuated strong note of Guaiac wood standing in union with balmy notes of vanilla, tonka and benzoin resin. There are several successors of this edition. Their bottles were designed similarly, with an exception of modern and futuristic Pi Neo perfume from 2008. The bottle for Pi was created by Serge Mansau. Their composition opens with aromas of basil, rosemary, tarragon and mandarin. A heart encompasses neroli, geranium, lily of the valley and anise, while base notes include: vanilla, tonka, cedar, benzoin, almond and yellow sugar.",
        imageUrl: "https://fimgs.net/mdimg/perfume/375x500.39.jpg",
        rating: 5.0,
        users: [
          {
            username: "Christian",
            rating: 5,
            comment:
              "Givenchy always suprises me, this one is awesome. Thumbs up"
          }
        ]
      }
    ]
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
                  path="/product"               
                  render={() => (
                    <PerfumeDetails perfume={this.state.perfumesList} />
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
