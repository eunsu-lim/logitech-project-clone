import React, { Component } from "react";
import "./ProductList.scss";

class ProductList extends Component {
  render() {
    const { mainMenu } = this.props;

    return (
      <ul className="productListWrap">
        <li className="productList">{mainMenu.category}</li>
        {mainMenu.subcategory.map((el) => {
          return (
            <li key={el.id}>
              <a href={el.url}>{el.category}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ProductList;
