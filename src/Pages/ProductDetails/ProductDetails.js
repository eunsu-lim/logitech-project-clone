import React, { Component } from "react";
import ProductImg from "./component/ProductImg";
import "./ProductDetails.scss";

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      productInfos: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/productInfo.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          productInfos: result.productInfo,
        });
      });
  }

  render() {
    const { productInfos } = this.state;
    return (
      <div className="ProductDetails">
        <section className="containerWrap">
          <div className="detailContainer">
            <div className="detailLeft">
              <ul className="">
                <li className="productList">
                  <img
                    className="productShot"
                    src="https://assets.logitech.com/assets/65685/logitech-pebble-m350.png"
                    alt="Logitech Pebble M350 1"
                  />
                </li>
              </ul>
            </div>
            <div className="productInfo">
              <div className="infoBox">
                <h3>LOGITECH PEBBLE M350</h3>
                <p className="infoDetail">
                  Modern, Slim, and Silent Wireless and <em>Bluetooth Mouse</em>
                </p>
                <p className="infoPrice">$ 29.99</p>
                <em>Free shipping on orders over $29.00</em>
              </div>

              <div className="infoColor">
                <p className="color">White</p>
                <ul>
                  <li>
                    <a href="#">
                      <img src="https://assets.logitech.com/assets/65882/3/pebble-i345-portable-wireless-mouse.jpg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://assets.logitech.com/assets/65608/8/logitech-pebble.jpg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://assets.logitech.com/assets/65608/35/logitech-pebble.jpg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://assets.logitech.com/assets/65685/20/logitech-pebble-m350.jpg" />
                    </a>
                  </li>
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
              <li>
                <a href="#">
                  <img src="https://assets.logitech.com/assets/65685/logitech-pebble-m350.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://assets.logitech.com/assets/65685/2/logitech-pebble-m350.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://assets.logitech.com/assets/65685/3/logitech-pebble-m350.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://assets.logitech.com/assets/65685/4/logitech-pebble-m350.png" />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="mainBg">
          <div className="bgContent">
            <h2>Minimalist. Modern. Silent.</h2>
            <p>Logitech Pebble Wireless Mouse M350</p>
          </div>
        </section>
        <section className="detailTop">
          <div className="detailText">
            <h3>OWN YOUR SPACE</h3>
            <p>
              Make any space minimalist, modern, and silent with Logitech Pebble
              – the portable mouse that fits your curated lifestyle and goes
              wherever life takes you. The smooth organic shape fits in your
              pocket, bag, and feels great in your hand. With silent clicking
              and scrolling, you can get in the flow without disturbing anyone
              around you.
            </p>
          </div>
        </section>
        <section className="productImglist">
          <div>
            <h6>Features</h6>
            <ul>
              <ProductImg productData={productInfos} />
            </ul>
          </div>
        </section>
        <section className="productSlider">
          <div>
            <h2>HOW TO SET UP</h2>
            <div className="sliderBox">슬라이드 영역</div>
          </div>
        </section>
        <section className="productSpec">
          <div className="specBox">
            <h6>SPECS & DETAIL</h6>
            <div className="specList">
              <div>
                <ul>
                  <li>
                    <div>
                      <h4>DIMENSIONS</h4>
                      <p>
                        <strong>Mouse Dimensions</strong>
                      </p>
                      <p>Height x Width x Depth:</p>
                      <p>4.21 in (107mm) x 2.32 in (59mm) 1.04 in (26.5mm)</p>
                      <p>Weight (with batteries): 3.53 oz (100 g)</p>
                      <p>
                        <strong>Nano receiver</strong>
                      </p>
                      <p>Height x Width x Depth:</p>
                      <p>
                        0.74 in (18.7 mm) 0.57 in (14.4 mm) x 0.24 in (6.1 mm)
                      </p>
                      <p>Weight: 0.06 oz (1.8 g)</p>
                      <h4>SYSTEM REQUIREMENTS</h4>
                      <p>
                        Windows® | Mac | Chrome® OS | Linux® | Works with
                        Surface™
                      </p>
                      <p>
                        <strong>Receiver</strong>
                      </p>
                      <p>Required: Available USB port</p>
                      <p>Windows 10 or later, Windows 8, Windows 7</p>
                      <p>macOS 10.10 or later</p>
                      <p>Chrome OS</p>
                      <p>Linux Kernel 2.6+</p>
                      <p>
                        <strong>Bluetooth</strong>
                      </p>
                      <p>Required: Bluetooth Low Energy technology</p>
                      <p>Windows 10 or later, Windows 8</p>
                      <p>macOS 10.10 or later</p>
                      <p>Chrome OS, Android™ 5.0 or later</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>DIMENSIONS</h4>
                      <p>
                        <strong>Mouse Dimensions</strong>
                      </p>
                      <p>Height x Width x Depth:</p>
                      <p>4.21 in (107mm) x 2.32 in (59mm) 1.04 in (26.5mm)</p>
                      <p>Weight (with batteries): 3.53 oz (100 g)</p>
                      <p>
                        <strong>Nano receiver</strong>
                      </p>
                      <p>Height x Width x Depth:</p>
                      <p>
                        0.74 in (18.7 mm) 0.57 in (14.4 mm) x 0.24 in (6.1 mm)
                      </p>
                      <p>Weight: 0.06 oz (1.8 g)</p>
                      <h4>SYSTEM REQUIREMENTS</h4>
                      <p>
                        Windows® | Mac | Chrome® OS | Linux® | Works with
                        Surface™
                      </p>
                      <p>
                        <strong>Receiver</strong>
                      </p>
                      <p>Required: Available USB port</p>
                      <p>Windows 10 or later, Windows 8, Windows 7</p>
                      <p>macOS 10.10 or later</p>
                      <p>Chrome OS</p>
                      <p>Linux Kernel 2.6+</p>
                      <p>
                        <strong>Bluetooth</strong>
                      </p>
                      <p>Required: Bluetooth Low Energy technology</p>
                      <p>Windows 10 or later, Windows 8</p>
                      <p>macOS 10.10 or later</p>
                      <p>Chrome OS, Android™ 5.0 or later</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="productSupport">
              <h3>Looking for support for this product?</h3>
              <button>GET SUPPORT</button>
            </div>
          </div>
        </section>
        <section className="productFooter">
          <ul>
            <li>
              Sound level comparison between Logitech Pebble M350 and Logitech
              M170. Left click dBA measured by an independent lab at 1m.
            </li>
            <li>
              Wireless range may vary based on environmental and computing
              conditions.
            </li>
            <li>
              Battery life may vary based on user and computing conditions.
              Battery included.
            </li>
            <li>
              Wireless range may vary due to environmental and computing
              condition
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default ProductDetails;
