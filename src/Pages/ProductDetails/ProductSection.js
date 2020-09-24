import React, { Component } from "react";
import "./ProductSection.scss";
//import { api } from "../../config/api.js";

class ProductSection extends Component {
  state = {
    dataDetail: {},
    colorKeys: [],
    imgIndex: 0,
    imgColor: "",
  };

  //fetch(`${api}/products/product_mice/199`) // 177-204   184 192

  componentDidMount() {
    fetch("/data/product.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          dataDetail: result.mice_product,
          imgColor: result.mice_product["color_images"][0].name,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { dataDetail } = this.state;
    if (prevState.dataDetail !== this.state.dataDetail) {
      this.setState({
        colorKeys: Object.keys(dataDetail["thumbnail_url"]),
      });
    }
  }

  handleImgColor = (e) => {
    const { name } = e.target;
    this.setState({
      imgColor: name,
    });
  };

  render() {
    const { dataDetail, imgIndex, imgColor, colorKeys } = this.state;
    console.log(colorKeys);

    console.log("imgIndex : ", imgIndex);
    return (
      <div>
        {Object.keys(dataDetail).length > 0 && colorKeys.length > 0 && (
          <div className="ProductSection">
            <section className="containerWrap">
              <div className="detailContainer">
                <div className="detailLeft">
                  <ul className="">
                    <li className="productList">
                      <img
                        className="productShot"
                        src={dataDetail.thumbnail_url[imgColor][imgIndex]}
                        alt="Logitech"
                      />
                    </li>
                  </ul>
                </div>
                <div className="productInfo">
                  <div className="infoBox">
                    <h3>{dataDetail.product_title}</h3>
                    <p className="infoDetail">{dataDetail.product_details}</p>
                    <p className="infoPrice">{dataDetail.product_price}</p>
                    <em>{dataDetail.product_note}</em>
                  </div>

                  <div className="infoColor">
                    <p className="color">{imgColor}</p>
                    <ul>
                      {dataDetail.color_images.map((el, i) => {
                        return (
                          <li key={el.id} onClick={this.handleImgColor}>
                            <a href="#">
                              <img
                                name={el.name}
                                src={el.image_url}
                                alt="color images"
                              />
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="infoBtn">
                    <button>add to cart</button>
                    <a href="#">+ specifications</a>
                  </div>
                </div>
              </div>
              <div className="productsBelow">
                <ul className="productThumbs">
                  {Object.values(dataDetail.thumbnail_url[imgColor]).map(
                    (el, idx) => {
                      console.log("el", el);
                      return (
                        <li
                          key={idx}
                          onClick={() => this.setState({ imgIndex: idx })}
                        >
                          <a href="#">
                            <img src={el} />
                          </a>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </section>
          </div>
        )}
      </div>
    );
  }
}

export default ProductSection;
