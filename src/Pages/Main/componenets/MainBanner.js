import React, { Component } from "react";
import Slider from "react-slick";

import "./MainBanner.scss";

class secondMainBanner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <Slider {...settings}>
        <div className="componentWrap">
          <img
            className="firstBannerImg"
            alt=""
            src="https://resource.logitech.com/w_1800,h_1800,c_limit,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/products/mobility/folio-touch/folio-touch-air-hpb-desktop.png?v=1"
          />
          <div className="firstBannerTextWrap">
            <p className="firstBannerText">Folio Touch for iPad Air</p>
            <p className="firstBannerText-1">ONE CASE TO DO IT ALL</p>
            <a href="#/" className="firstBannerBtn">
              <span>FOLIO TOUCH</span>
            </a>
          </div>
        </div>
        <div className="componentWrap">
          <img
            className="secondBannerImg"
            alt=""
            src="https://resource.logitech.com/w_1800,h_1800,c_limit,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/homepage/mx-anywhere-3-desktop.png?v=1"
          />
          <div className="secondBannerTextWrap">
            <p className="secondBannerText">The Master Series by Logitech</p>
            <p className="secondBannerText-1">MASTER IT. ANYWHERE.</p>
            <a href="#/" className="secondBannerBtn">
              <span>MX ANYWHERE 3</span>
            </a>
            <a href="#/" className="secondBannerBtnA">
              <span>MX ANYWHERE 3 FOR MAC</span>
            </a>
          </div>
        </div>
        <div className="componentWrap">
          <img
            className="thirdBannerImg"
            alt=""
            src="https://resource.logitech.com/w_1800,h_1800,c_limit,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/homepage/hero-banners/aem-hpb-apple-desktop.png?v=1"
          />
          <div className="thirdBannerTextWrap">
            <p className="thirdBannerText">DESIGNED FOR EVERYTHING APPLE</p>
            <p className="thirdBannerText-1">
              Award-winning accessories for Mac, iPad, and iPhone.
            </p>
            <a href="#/" className="thirdBannerBtn">
              <span>MX ANYWHERE 3</span>
            </a>
          </div>
        </div>
      </Slider>
    );
  }
}

export default secondMainBanner;
