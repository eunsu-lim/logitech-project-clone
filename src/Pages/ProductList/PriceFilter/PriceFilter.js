import React, { Component } from "react";

export default class PriceFilter extends Component {
  // showPriceFilter = (e) => {
  //   const { filterList, filterAddress } = this.props;
  //   console.log(filterList[e.target.id]);
  //   this.setState({ filterAddress: filterList[e.target.id] });
  //   console.log(filterAddress);
  // };

  render() {
    const { showPriceFilter } = this.props;
    return (
      <div className="priceFilter">
        <ul>
          <li className="product_list" onClick={showPriceFilter}>
            <span id="NEWEST">NEWEST</span>
          </li>
          <li className="price_high_low" onClick={showPriceFilter}>
            <span id="HighLow">PRICE: High to Low</span>
          </li>
          <li className="price_low_high" onClick={showPriceFilter}>
            <span id="LowHigh">PRICE: Low to High</span>
          </li>
        </ul>
      </div>
    );
  }
}
