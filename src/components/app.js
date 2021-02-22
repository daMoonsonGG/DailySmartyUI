import React, { Component } from "react";
import Logo from "./logo";

export default class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <div className="logo">
          <Logo />
        </div>
        <div className="search-bar">
          <input placeholder="DailySmarty" />
        </div>
        <div className="recent-posts">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
    );
  }
}
