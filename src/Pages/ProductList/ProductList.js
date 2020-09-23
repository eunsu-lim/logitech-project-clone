import React, { Component } from "react";
import Nav from "../../Component/Nav/Nav";
import NavBottom from "../../Component/NavBottom/SearchBar";
import PriceFilter from "./PriceFilter/PriceFilter";
import List from "../ProductList/List/List";
import SidebarFilter from "./sidebar/SidebarFilter";
import SidebarfilterColletcion from "./sidebarCollection/SidebarfilterCollection";
import Footer from "../../Component/Footer/Footer";
import "./ProductList.scss";
import "./PriceFilter/PriceFilter.scss";

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
      filters: SidebarfilterColletcion,
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
        <Nav />
        <NavBottom />
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
              <p>SORTY BY: NEWEST</p>
              <PriceFilter />
            </button>
          </div>
          <div className="filterContainer">
            <div className="filterSidebar">
              {this.state.hideFilter ? (
                <div className="collection">
                  <SidebarfilterColletcion />
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
        <Footer />
      </div>
    );
  }
}

export default ProductList;
