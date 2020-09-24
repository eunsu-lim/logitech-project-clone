import React, { Component } from "react";
import "./ProductSection.scss";
import { api } from "../../config/api.js";

class ProductSection extends Component {
  state = {
    dataDetail: {},
    colorKeys: [],
    imgIndex: 0,
    imgColor: [],
  };

  componentDidMount() {
    fetch(`${api}/products/product_mice/103`) // 88- 115
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          dataDetail: result.mice_data,
          imgColor:
            result.mice_data["color_images"].length &&
            result.mice_data["color_images"][0].color,
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
    console.log("e.target", e.target);
    this.setState({
      imgColor: name,
    });
  };

  render() {
    const { dataDetail, imgIndex, imgColor, colorKeys } = this.state;
    return (
      <div>
        {Object.keys(dataDetail).length && colorKeys.length && (
          <div className="ProductSection">
            <section className="containerWrap">
              <div className="detailContainer">
                <div className="detailLeft">
                  <ul className="">
                    <li className="productList">
                      <img
                        className="productShot"
                        src={
                          imgColor
                            ? dataDetail.thumbnail_url[imgColor][imgIndex]
                            : dataDetail.thumbnail_url.null[imgIndex]
                        }
                        alt="Logitech"
                      />
                    </li>
                  </ul>
                </div>
                <div className="productInfo">
                  <div className="infoBox">
                    <h3>{dataDetail.product_title}</h3>
                    <p className="infoDetail">{dataDetail.product_details}</p>
                    <p className="infoPrice">$ {dataDetail.product_price}</p>
                    <em>{dataDetail.product_note}</em>
                  </div>

                  {imgColor ? (
                    <div className="infoColor">
                      <p className="color">{imgColor}</p>
                      <ul>
                        {dataDetail.color_images.length
                          ? dataDetail.color_images.map((colorName, i) => {
                              return (
                                <li
                                  key={colorName.id}
                                  onClick={this.handleImgColor}
                                >
                                  <a href="#">
                                    <img
                                      name={colorName.color}
                                      src={colorName.image_url}
                                      alt="color images"
                                    />
                                  </a>
                                </li>
                              );
                            })
                          : () => {
                              return;
                            }}
                      </ul>
                    </div>
                  ) : (
                    <></>
                  )}

                  <div className="infoBtn">
                    <button>add to cart</button>
                    <a href="#">+ specifications</a>
                  </div>
                </div>
              </div>
              <div className="productsBelow">
                <ul className="productThumbs">
                  {Object.values(
                    imgColor
                      ? dataDetail.thumbnail_url[imgColor]
                      : dataDetail.thumbnail_url.null
                  ).map((imgList, idx) => {
                    return (
                      <li
                        key={idx}
                        onClick={() => this.setState({ imgIndex: idx })}
                      >
                        <a href="#">
                          <img src={imgList} />
                        </a>
                      </li>
                    );
                  })}
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
