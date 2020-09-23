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
            <a href={el.url}>
              <li key={el.id}>{el.category}</li>
            </a>
          );
        })}
      </ul>
    );
  }
}

export default ProductList;
