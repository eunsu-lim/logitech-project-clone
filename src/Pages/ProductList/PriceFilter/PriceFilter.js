import React, { Component } from "react";

export default class PriceFilter extends Component {
  showwHighToLow = () => {};
  render() {
    return (
      <div className="priceFilter">
        <ul>
          <li className="highToLow" onClick={this.showwHighToLow}>
            <span>PRICE: High to Low</span>
          </li>
          <li className="lowToHigh">
            <span>PRICE: Low to High</span>
          </li>
        </ul>
      </div>
    );
  }
}
