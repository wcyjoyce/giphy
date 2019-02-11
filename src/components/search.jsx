import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    }
  }

  handleUpdate = (event) => {
    this.setState({
      term: event.target.value
    });
    this.props.searchFunction(event.target.value)
  }

  render() {
    return (
      <input
      value={this.state.term}
      type="text"
      placeholder="search"
      className="form-control form-search"
      onChange={this.handleUpdate} />
    );
  }
}

export default Search;
