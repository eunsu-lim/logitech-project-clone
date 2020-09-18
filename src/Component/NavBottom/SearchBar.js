import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <div className="searchBar">
          <div className="searchBarContainer">
            <img
              className="searchBarLogo"
              alt="logo"
              src="/Image/Main/logoDark.png"
            />
            <div>
              <a href="/#">PRODUCT</a>
              <a href="/#">SOLUTION</a>
              <a href="/#">BUSINESS</a>
              <a href="/#">SUPPORT</a>
            </div>
            <input className="searchBarInput" placeholder="Search" />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
