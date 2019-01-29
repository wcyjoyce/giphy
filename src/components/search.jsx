import React, { Component } from "react";

class Search extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value)
  }

  render() {
    return (
      <input type="text" placeholder="search" className="form-control form-search" onChange={this.handleUpdate} />
    );
  }
}

export default Search;
