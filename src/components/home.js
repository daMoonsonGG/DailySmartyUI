import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./searchbar";
import RecentPosts from "./recentposts";

export default class Home extends Component {
  handleSearchBarSubmit(query) {
    console.log("Try to handle submit for query", query);
    this.props.history.push("/results");
  }

  render() {
    return (
      <div className="app-wrapper">
        <Logo />
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
        <RecentPosts />
      </div>
    );
  }
}
