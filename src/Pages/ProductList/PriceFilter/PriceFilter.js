import React, { Component } from "react";

export default class PriceFilter extends Component {
  render() {
    return (
      <div className="priceFilter">
        <ul>
          <li>
            <span>PRICE: High to Low</span>
          </li>
          <li>
            <span>PRICE: Low to High</span>
          </li>
        </ul>
      </div>
    );
  }
}
