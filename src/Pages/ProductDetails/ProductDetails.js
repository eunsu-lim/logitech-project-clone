import React, { Component } from "react";
import Slider from "react-slick";
import Nav from "../../Component/Nav/Nav";
import NavBottom from "../../Component/NavBottom/SearchBar";
import SpecList from "./component/SpecList";
import ProductImg from "./component/ProductImg";
import ProductSection from "./ProductSection";
import Footer from "../../Component/Footer/Footer";
import PRODUCTSET from "./setupData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductDetails.scss";

class ProductDetails extends Component {
  state = {
    product: [],
    imgColor: "White",
    imgIndex: 0,
    modal: false,
    video: "",
  };

  componentDidMount() {
    fetch("/data/productInfo.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          product: result.productInfo,
          slideImg: result.slide,
        });
      });
  }

  handleImgColor = (e) => {
    const { name } = e.target;
    this.setState({
      imgColor: name,
    });
  };

  handleModal = () => {
    this.setState(
      (prev) => {
        console.log(this.state.modal);
        return {
          modal: !prev.modal,
        };
      },
      () => {
        this.setState({
          video: this.state.modal
            ? "https://www.youtube.com/embed/NJXbGxCBmYI?autoplay=1"
            : "",
        });
      }
    );
  };

  render() {
    const { product } = this.state;
    const slideSet = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      draggable: true,
    };

    return (
      <div className="ProductDetails">
        <Nav />
        <NavBottom />
        <ProductSection />
        <section className="mainBg">
          <div className="bgContent">
            <h2>Minimalist. Modern. Silent.</h2>
            <p>Logitech Pebble Wireless Mouse M350</p>
            <div onClick={this.handleModal} className="playBtn"></div>
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
              <ProductImg productData={product} />
            </ul>
          </div>
        </section>
        <section className="productSlider">
          <div className="sliderContainer">
            <h2>HOW TO SET UP</h2>
            <div className="sliderBox">
              <div>
                <Slider {...slideSet}>
                  {PRODUCTSET.map((el) => {
                    return (
                      <div>
                        <img src={el.img} alt="Set up" />
                        <h4>{el.slideTitle}</h4>
                        <p>{el.slideContent}</p>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </section>
        <section className="productSpec">
          <div className="specBox">
            <h6>SPECS & DETAIL</h6>
            <div className="specList">
              <div>
                <SpecList />
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
              1. Sound level comparison between Logitech Pebble M350 and
              Logitech M170. Left click dBA measured by an independent lab at
              1m.
            </li>
            <li>
              2. Wireless range may vary based on environmental and computing
              conditions.
            </li>
            <li>
              3. Battery life may vary based on user and computing conditions.
              Battery included.
            </li>
            <li>
              4. Wireless range may vary due to environmental and computing
              condition
            </li>
          </ul>
        </section>

        <div className={this.state.modal ? "modalBox modal" : "modalBox"}>
          <div className="modalBg" onClick={this.handleModal}>
            <div className="closeBtn">X</div>
          </div>
          <div className="modalContent">
            <iframe
              width="640"
              height="390"
              src={this.state.video}
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductDetails;
