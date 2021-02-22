import React, { Component } from "react";
import Logo from "./logo";
import Searchbar from "./searchbar";
import RecentPosts from "./recentposts";

export default class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <div className="logo">
          <Logo />
        </div>
        <div className="search-bar">
          <Searchbar />
        </div>
        <div className="recent-posts">
          <RecentPosts />
        </div>
      </div>
    );
  }
}
