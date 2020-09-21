import React, { Component } from "react";
import List from "../ProductList/List/List";
import FilterConnectivity from "./Filter/FilterConnectivity";
import Filter from "./Filter/Filter";
//import "../ProductList/ProductList.scss"
import "./ProductList.scss";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      filters: [],
      hideFilter: true,
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
    });
  }
  render() {
    return (
      <div className="productList">
        <div className="category">
          <div className="categoryData">
            <div className="">
              {/* href...? */}
              <a className="miceKeyboard">Mice + Keyboards </a> / Mice
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
              <span>HIDE FILTER</span>
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
              {this.state.hideFilter ? (
                <div className="collection">
                  <FilterConnectivity />{" "}
                </div>
              ) : null}
              {/* <Filter /> */}
            </div>
            <div className="container">
              <List />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
