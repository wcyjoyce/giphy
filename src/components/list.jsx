import React, { Component } from "react";
import Gif from "./gif.jsx";

class List extends Component {
  renderList() {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default List;
