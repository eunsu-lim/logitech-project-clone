import React, { Component } from "react";
//import COLOR from "./colorData";
//import PRODUCTCOLOR from "./data";
import "./ProductSection.scss";
import { api } from "../../config/api.js";

//const COLORLIST = ["White", "Rose", "Blue Grey", "Graphite"];

class ProductSection extends Component {
  state = {
    dataDetail: [],
    imgColor: "White",
    imgIndex: 0,
  };

  componentDidMount() {
    fetch(`${api}/products/product_mice/199`) // 177-204   184 192
      .then((res) => res.json())
      .then((result) => {
        console.log("result.mice_data: ", result.mice_data);
        this.setState({
          dataDetail: result.mice_data,
        });
      });
  }

  handleImgColor = (e) => {
    const { name } = e.target;
    this.setState({
      imgColor: name,
    });
  };

  render() {
    const { dataDetail, imgIndex, imgColor } = this.state;
    console.log(dataDetail);
    return (
      <div>
        {dataDetail.length !== 0 && (
          <div className="ProductSection">
            <section className="containerWrap">
              <div className="detailContainer">
                <div className="detailLeft">
                  <ul className="">
                    <li className="productList">
                      {/* <img
                      className="productShot"
                      src={PRODUCTCOLOR[imgColor][imgIndex]}
                      alt="Logitech"
                    /> */}
                      <img
                        className="productShot"
                        src={dataDetail.thumnbnail_url[0]}
                        alt="Logitech"
                      />
                    </li>
                  </ul>
                </div>
                <div className="productInfo">
                  <div className="infoBox">
                    <h3>{dataDetail && dataDetail.product_title}</h3>
                    <p className="infoDetail">
                      {dataDetail && dataDetail.product_details}
                    </p>
                    <p className="infoPrice">
                      {dataDetail && dataDetail.product_price}
                    </p>
                    <em>{dataDetail.product_note}</em>
                  </div>

                  {/* <div className="infoColor">
                  <p className="color">{imgColor}</p>
                  <ul>
                    {COLOR.map((el, i) => {
                      return (
                        <li key={i} onClick={this.handleImgColor}>
                          <a href="#">
                            <img
                              name={COLORLIST[i]}
                              src={el}
                              alt="color images"
                            />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div> */}
                  <div className="infoBtn">
                    <button>add to cart</button>
                    <a href="#">+ specifications</a>
                  </div>
                </div>
              </div>
              <div className="productsBelow">
                <ul className="productThumbs">
                  {/* {dataDetail[imgColor].map((el, i) => {
                  return (
                    <li key={i} onClick={() => this.setState({ imgIndex: i })}>
                      <a href="#">
                        <img src={el} />
                      </a>
                    </li>
                  );
                })} */}
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
