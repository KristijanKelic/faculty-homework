import React, { Component } from "react";
import "./App.css";

import Header from "../components/Header/Header";
import Perfumes from '../components/Perfumes/Perfumes';
import Favorites from '../components/Favorites/Favorites';

class App extends Component {
  state = {
    perfumesList: [
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
      }
    ]
  };
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Perfumes perfume={this.state.perfumesList[0]} />
            </div>
            <div className="col-md-4">
              <Favorites perfume={this.state.perfumesList[0]} flag={true}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
