import React, { Component } from 'react';
import NavBarList from './Components/NavBarList';
import './SearchBar.scss';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      activeTab: null,
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/Data/navBarData.json')
      .then((res) => res.json())
      .then((res) => this.setState({ productList: res.MainMenu }));
  };

  mainNavHover = (num) => {
    if (this.state.activeTab === num) this.setState({ activeTab: null });
    else this.setState({ activeTab: num });
  };

  render() {
    const { productList, activeTab } = this.state;

    return (
      <div>
        <div className="searchBar">
          <div className="searchBarContainer">
            <img
              className="searchBarLogo"
              alt="logo"
              src="/Image/Main/logoDark.png"
            />
            <div className="searchBarListWrap">
              <div
                className="searchBarList"
                onMouseOver={() => this.mainNavHover(0)}
                onMouseOut={() => this.mainNavHover(0)}
              >
                PRODUCT
                <div
                  className={`mainList ${activeTab === 0 ? 'show' : 'hide'}`}
                >
                  {productList.map((el, index) => {
                    return <NavBarList key={index} mainMenu={el} />;
                  })}
                </div>
              </div>
              <div
                className="searchBarList"
                onmouseOver={() => this.mainNavHover(1)}
                onMouseOut={() => this.mainNavHover(1)}
              >
                SOLUTION
                <div
                  className={`mainList ${activeTab === 1 ? 'show' : 'hide'}`}
                ></div>
              </div>
              <div
                className="searchBarList"
                onmouseOver={() => this.mainNavHover(2)}
                onMouseOut={() => this.mainNavHover(2)}
              >
                BUSINESS
                <div
                  className={`mainList ${activeTab === 2 ? 'show' : 'hide'}`}
                ></div>
              </div>
              <div
                className="searchBarList"
                onmouseOver={() => this.mainNavHover(3)}
                onMouseOut={() => this.mainNavHover(3)}
              >
                SUPPORT
                <div
                  className={`mainList ${activeTab === 3 ? 'show' : 'hide'}`}
                ></div>
              </div>
            </div>
            <input className="searchBarInput" placeholder="Search" />
          </div>
        </div>
      </div>
    );
  }
}
export default SearchBar;
