import React, { Component } from "react";

export default class RecentPosts extends Component {
  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts-wrapper">
          <div className="recent-posts-heading">Recent posts</div>
          <ul className="recent-posts-posts">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
    );
  }
}
