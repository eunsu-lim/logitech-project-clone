import React, { Component } from "react";
import "../../ProductList/ProductList.scss";

class List extends Component {
  state = {
    products: [],
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

  render() {
    return (
      <ul>
        {this.state.products.map((product, index) => {
          if (index !== 2) {
            return (
              <li className="List" key={index}>
                <div
                  className="productContainer"
                  onMouseOver={this.handleMouseOver}
                >
                  <div className="productImage">
                    <div className="check">
                      <input type="checkbox" />
                      Compare
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
          } else {
            return (
              <li className="List" key={index}>
                <div
                  className="productContainer"
                  onMouseOver={this.handleMouseOver}
                >
                  <div className="gamingMouse">
                    GAMING MICE >
                    {/* <div className="check" >
                                        <input type="checkbox" />
                                        <span>Compare</span>
                                    </div> */}
                  </div>
                  <div className="noneInfo"></div>
                </div>
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

export default List;
