import React, { Component } from "react";
import ProductList from "./Components/ProductList";
import SolutionList from "./Components/SolutionList";
import BusinessList from "./Components/BusinessList";
import SupportList from "./Components/SupportList";
import { Link } from "react-router-dom";
import "./SearchBar.scss";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      activeTab: null,
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/Data/navBarData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ productList: res.MainMenu });
      });
  };

  mainNavHover = (num) => {
    const { activeTab } = this.state;
    if (activeTab === num) {
      this.setState({ activeTab: null });
    } else this.setState({ activeTab: num });
  };

  render() {
    const { productList, activeTab } = this.state;

    return (
      <div>
        <div className="searchBar">
          <div className="searchBarContainer">
            <Link to="/">
              <img
                className="searchBarLogo"
                alt="logo"
                src="/Image/Main/logoDark.png"
              />
            </Link>
            <div className="searchBarListWrap">
              <div
                className="searchBarList"
                onMouseOver={() => this.mainNavHover(0)}
                onMouseOut={() => this.mainNavHover(0)}
              >
                PRODUCT
                <div
                  className={`mainList ${activeTab === 0 ? "show" : "hide"}`}
                >
                  {productList
                    .filter((el) => el.category)
                    .map((el, index) => {
                      return <ProductList key={index} mainMenu={el} />;
                    })}
                </div>
              </div>
              <div
                className="searchBarList"
                onMouseOver={() => this.mainNavHover(1)}
                onMouseOut={() => this.mainNavHover(1)}
              >
                SOLUTION
                <div
                  className={`mainList ${activeTab === 1 ? "show" : "hide"}`}
                >
                  {productList
                    .filter((el) => el.solutionCategory)
                    .map((el, index) => {
                      return <SolutionList key={index} mainMenu={el} />;
                    })}
                </div>
              </div>
              <div
                className="searchBarList"
                onMouseOver={() => this.mainNavHover(2)}
                onMouseOut={() => this.mainNavHover(2)}
              >
                BUSINESS
                <div
                  className={`mainList businessMainList ${
                    activeTab === 2 ? "show" : "hide"
                  }`}
                >
                  {productList
                    .filter((el) => el.businessCategory)
                    .map((el, index) => {
                      return <BusinessList key={index} mainMenu={el} />;
                    })}
                </div>
              </div>
              <div
                className="searchBarList"
                onMouseOver={() => this.mainNavHover(3)}
                onMouseOut={() => this.mainNavHover(3)}
              >
                SUPPORT
                <div
                  className={`mainList supportMainList ${
                    activeTab === 3 ? "show" : "hide"
                  }`}
                >
                  {productList
                    .filter((el) => el.supportCategory)
                    .map((el, index) => {
                      return <SupportList key={index} mainMenu={el} />;
                    })}
                </div>
              </div>
            </div>
            <a href="/#" className="searchTrigger" role="button">
              <span>Search</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchBar;
