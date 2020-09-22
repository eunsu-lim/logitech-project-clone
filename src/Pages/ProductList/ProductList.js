import React, { Component } from "react";
import List from "../ProductList/List/List";
import FilterConnectivity from "./Filter/FilterConnectivity";
import SidebarFilter from "./sidebar/SidebarFilter";
//import "../ProductList/ProductList.scss"
import "./ProductList.scss";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      filters: [],
      hideFilter: true,
      hideFilterText: "HIDE FILTERS",
      showFilterIcon: true,
    };
  }

  componentDidMount() {
    this.setState({
      filters: FilterConnectivity,
    });
  }

  hideFilter() {
    this.setState({
      hideFilter: !this.state.hideFilter,
      hideFilterText: !this.state.hideFilter ? "HIDE FILTERS" : "SHOW FILTERS",
    });
  }

  render() {
    return (
      <div className="productList">
        <div className="category">
          <div className="categoryData">
            <div className="">
              <div className="miceKeyboardMice">
                <a className="miceKeyboard">Mice + Keyboards </a> / Mice
              </div>
            </div>
            <h1>MICE</h1>
            <h6>Logitech Mice</h6>
          </div>
          <div className="mouseImage">
            <img
              alt="mouseImage"
              src="https://www.logitech.com/assets/64464/mice.png"
            />
          </div>
        </div>
        <div className="filterProductContainer">
          <div className="filterSorter">
            <button onClick={() => this.hideFilter()}>
              <img
                src="https://www.logitech.com/images/icons/filter-toggle.svg"
                alt=""
              />
              <span className="hideFilterButton">
                {this.state.hideFilterText}
              </span>
            </button>
            <button>
              <img
                src="https://www.logitech.com/images/icons/down-arrow.svg"
                alt=""
              />
              <span>SORTY BY: NEWEST</span>
            </button>
          </div>

          <div className="filterContainer">
            <div className="filterSidebar">
              {/*  */}

              {this.state.hideFilter ? (
                <div className="collection">
                  <FilterConnectivity />
                  <SidebarFilter />
                </div>
              ) : null}
            </div>
            <div className="container">
              <List />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
