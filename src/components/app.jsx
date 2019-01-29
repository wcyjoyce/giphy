import React, { Component } from "react";
import giphy from "giphy-api";

import Search from "./search.jsx";
import Gif from "./gif.jsx";
import List from "./list.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGifId: "1ylQIC6BNa9uWytUFr",
      gifs: []
    }
  }

  // Calling Giphy API
  search = (query) => {
    giphy("Mr6Aef5JZaSoatIszqAulb0RuOmD2VA8").search({
      q: query,
      rating: "g",
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Search searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <List gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
