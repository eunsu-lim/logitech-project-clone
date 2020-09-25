import React, { Component } from "react";
import Nav from "../../Component/Nav/Nav";
import NavBottom from "../../Component/NavBottom/SearchBar";
import PriceFilter from "./PriceFilter/PriceFilter";
import SidebarFilter from "./sidebar/SidebarFilter";
import SidebarfilterColletcion from "./sidebarCollection/SidebarfilterCollection";
//import MiceList from "../ProductList/MiceList/MiceList";
import Footer from "../../Component/Footer/Footer";
import { api } from "../../config/api";
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
      showPriceFilter: true,
      openedPriceFilter: true,
      priceFilter: "NEWEST",
      products: [],
      isChecked: false,
      filterList: {
        NEWEST: "mice_list",
        HighLow: "price_high_low",
        LowHigh: "price_low_high",
      },
      priceFName: {
        NEWEST: "NEWEST",
        HighLow: "Price: High to Low",
        LowHigh: "Price: Low to High",
      },
      filterAddress: "",
      sortBy: "NEWEST",
    };

    this.goToDetail = this.goToDetail.bind(this);
  }

  componentDidMount() {
    fetch(`http://10.58.5.137:8000/products/mice_list`)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          products: result.mice_list,
        });
      });
  }

  handleFetch() {
    const { filterAddress } = this.state;
    let a = filterAddress === "mice_list" ? "" : `\?sort\=${filterAddress}`;
    fetch(`http://10.58.5.137:8000/products/mice_list${a}`)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          products: result.mice_list,
        });
      });
  }

  hideFilter() {
    const { hideFilter } = this.state;
    this.setState({
      hideFilter: !hideFilter,
      hideFilterText: !hideFilter ? "HIDE FILTERS" : "SHOW FILTERS",
    });
  }

  goToDetail(e) {
    const { id } = e.target;
    this.props.history.push(`/ProductDetails/${id}`);
  }

  handleCheckBox() {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  handlePriceFilter() {
    this.setState({
      showPriceFilter: !this.state.showPriceFilter,
    });
  }

  // callbackFunction = () => {
  //   const { filterList, filterAddress, priceFName, sortBy } = this.state;
  //   setTimeout(() => {
  //     this.setState({
  //       sortBy: priceFName[e.target.id],
  //     });
  //   }, 0);
  // };

  showPriceFilter = (e) => {
    const { filterList, filterAddress, priceFName, sortBy } = this.state;

    this.setState(
      {
        filterAddress: filterList[e.target.id],
        sortBy: priceFName[e.target.id],
        // sortBy: priceFName[filterList[e.target.id]],
      },
      () => this.handleFetch()
      // this.callbackFunction()
    );
  };
  render() {
    const {
      hideFilterText,
      hideFilter,
      showPriceFilter,
      priceFilter,
      isChecked,
      products,
      filterList,
      filterAddress,
      sortBy,
    } = this.state;

    return (
      <div className="productList">
        <Nav />
        <NavBottom />
        <div className="category">
          <div className="categoryBox">
            <div className="categoryData">
              <div className="miceKeyboardMice">
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
        </div>
        <div className="filterProductContainer">
          <div className="filterSorter">
            <button onClick={() => this.hideFilter()}>
              <img
                src="https://www.logitech.com/images/icons/filter-toggle.svg"
                alt=""
              />
              <span className="hideFilterButton">{hideFilterText}</span>
            </button>
            <button onClick={() => this.handlePriceFilter()}>
              <img
                src="https://www.logitech.com/images/icons/down-arrow.svg"
                alt=""
              />
              <p>SORTY BY: {sortBy}</p>
              {!showPriceFilter ? (
                <PriceFilter
                  filterList={filterList}
                  filterAddress={filterAddress}
                  showPriceFilter={this.showPriceFilter}
                />
              ) : null}
            </button>
          </div>
          <div className="filterContainer">
            <div className="filterSidebar">
              {hideFilter ? (
                <div className="collection">
                  <SidebarfilterColletcion />
                  <SidebarFilter />
                </div>
              ) : null}
            </div>

            <div className="container">
              <ul className="miceList">
                {products.map((product, index) => {
                  if (index !== 2 && product.product_details !== "") {
                    return (
                      <li className="List" key={index}>
                        <div className="productContainer">
                          <div className="productImage">
                            <img
                              alt={product.product_title}
                              src={`${product.thumbnail_url}`}
                              id={product.id}
                              onClick={this.goToDetail}
                            />
                          </div>
                          <div className="productInfo">
                            <p className="infoTitle">{product.product_title}</p>
                            <p className="infoDetail">
                              {product.product_details}
                            </p>
                            <p>{product.product_price}</p>
                          </div>
                        </div>
                      </li>
                    );

                    return (
                      <li className="List" key={index}>
                        <div
                          className="productContainer"
                          onMouseOver={this.handleMouseOver}
                        >
                          <div className="productImage">
                            <div className="check">
                              <input type="checkbox" className="checkbox" />
                              <label for="checkbox">
                                <span></span>Compare
                              </label>
                            </div>
                            <img
                              alt={product.product_title}
                              src={`${product.thumbnail_url}`}
                            />
                          </div>
                          <div className="productInfo">
                            <p className="infoTitle">{product.product_title}</p>
                            <p>{product.price}</p>
                          </div>
                        </div>
                      </li>
                    );
                  }
                })}
              </ul>
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
