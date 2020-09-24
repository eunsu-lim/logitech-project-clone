import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
    const id = this.props.match.params.id;
    fetch(`${api}/products/product_mice/${id}`) // 88- 115
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          dataDetail: result.mice_data,
          imgColor:
            result.mice_data["color_images"].length &&
            result.mice_data["color_images"][0].color,
        });
        window.scrollTo(0, 0);
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
    return (
      <div className="ProductSection">
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
                  {imgColor.length > 0 && (
                    <div className="infoColor">
                      <p className="color">{imgColor}</p>
                      <ul>
                        {dataDetail.color_images &&
                          dataDetail.color_images.map((colorName, i) => {
                            return (
                              <li
                                key={colorName.id}
                                onClick={this.handleImgColor}
                              >
                                <img
                                  name={colorName.color}
                                  src={colorName.image_url}
                                  alt="color images"
                                />
                              </li>
                            );
                          })}
                      </ul>
                    </div>
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
                        <img alt="imgList" src={imgList} />
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

export default withRouter(ProductSection);
