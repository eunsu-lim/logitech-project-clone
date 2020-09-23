import React, { Component } from "react";
import "../../ProductList/ProductList.scss";

class MiceList extends Component {
  state = {
    products: [],
    isChecked: false,
  };

  componentDidMount() {
    fetch("/Data/logitech_list.json")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          products: result.data,
        });
      });
  }

  handleMouseOver = () => {
    this.setState((state) => ({ a: !state.a }));
  };

  handleCheckBox() {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  render() {
    const { isChecked } = this.state;
    return (
      <ul className="MiceList">
        {this.state.products.map((product, index) => {
          if (index !== 2 && product.product_details !== "") {
            return (
              <li className="List" key={index}>
                <div
                  className="productContainer"
                  onMouseOver={this.handleMouseOver}
                >
                  <div className="productImage">
                    <div className="check" onClick={this.isChecked}>
                      <input
                        type="checkbox"
                        className="productCheckbox"
                        checked={isChecked}
                      />
                      <label for="productCheckbox">
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
                    <p className="infoDetail">{product.product_details}</p>
                    <p>{product.price}</p>
                  </div>
                </div>
              </li>
            );
          } else if (index === 2) {
            return (
              <li className="List" key={index}>
                <div
                  className="productContainer"
                  onMouseOver={this.handleMouseOver}
                >
                  <div className="gamingMouse">GAMING MICE ></div>
                  <div className="noneInfo"></div>
                </div>
              </li>
            );
          } else {
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
    );
  }
}

export default MiceList;
