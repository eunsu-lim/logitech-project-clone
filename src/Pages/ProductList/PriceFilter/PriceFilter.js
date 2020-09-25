import React, { Component } from "react";

export default class PriceFilter extends Component {
  render() {
    const { showPriceFilter } = this.props;
    return (
      <div className="priceFilter">
        <ul onClick={showPriceFilter}>
          <li className="newest">
            <span id="NEWEST">NEWEST</span>
          </li>
          <li className="price_high_low">
            <span id="HighLow">PRICE: High to Low</span>
          </li>
          <li className="price_low_high">
            <span id="LowHigh">PRICE: Low to High</span>
          </li>
        </ul>
      </div>
    );
  }
}
