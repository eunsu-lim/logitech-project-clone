import React, { Component } from "react";
import Slider from "react-slick";
import "./CategoryTiles.scss";

class CategoryTiles extends Component {
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
      <div className="tilesWrap">
        <Slider {...settings}>
          <div className="productListInfo">
            <div className="listInfo">
              <a href="/#" className="listItemMice">
                <img
                  className="listItem"
                  alt="/#"
                  src="https://resource.logitech.com/w_797,c_limit,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/homepage/product-grid/desktop-mice-and-keyboards.png?v=1"
                />
                <span className="textA">MICE & KEYBOARDS</span>
              </a>
              <a href="/#" className="listItemStreaming">
                <img
                  className="listItem"
                  alt="/#"
                  src="https://resource.logitech.com/w_797,c_limit,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/homepage/product-grid/desktop-streaming.png?v=1"
                />
                <span className="textB">STREAMING</span>
              </a>
              <a href="/#" className="listItemMobile">
                <img
                  className="listItem"
                  alt="/#"
                  src="https://resource.logitech.com/w_797,c_limit,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/homepage/product-grid/desktop-mobile-devices.png?v=1"
                />
                <span className="textC">MOBILE DEVICES</span>
              </a>
              <a href="/#" className="listItemHeadsets">
                <img
                  className="listItem"
                  alt="/#"
                  src="https://resource.logitech.com/w_797,c_limit,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/homepage/product-grid/desktop-headsets.png?v=1"
                />
                <span className="textD">HEADSETS</span>
              </a>
              <a href="/#" className="listItemVideo">
                <img
                  className="listItem"
                  alt="/#"
                  src="https://resource.logitech.com/w_797,c_limit,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/homepage/product-grid/desktop-video-conferencing.png?v=1"
                />
                <span className="textE">VIDEO CONFERENCING</span>
              </a>
            </div>
          </div>
          <div className="secondProductListInfo">
            <div className="secondListInfo">
              <a href="/#" className="WirelessCharging">
                <img
                  className="secondListItem"
                  alt="/#"
                  src="https://resource.logitech.com/w_797,c_limit,q_auto,f_auto,dpr_2.0/content/dam/logitech/en/homepage/product-grid/desktop-wireless-charging.png?v=1"
                />
                <span className="secondTextA">WIRELESS CHARGING</span>
              </a>
              <a href="/#" className="securityCamera">
                <img
                  className="secondListItem"
                  alt="/#"
                  src="https://resource.logitech.com/w_797,c_limit,q_auto,f_auto,dpr_2.0/content/dam/logitech/en/homepage/product-grid/desktop-home-security-cameras.png?v=1"
                />
                <span className="secondTextB">HOME SECURITY CAMERAS</span>
              </a>
              <a href="/#" className="speakers">
                <img
                  className="secondListItem"
                  alt="/#"
                  src="https://resource.logitech.com/w_797,c_limit,q_auto,f_auto,dpr_2.0/content/dam/logitech/en/homepage/product-grid/desktop-speakers.png?v=1"
                />
                <span className="secondTextC">SPEAKERS</span>
              </a>
              <a href="/#" className="smartHome">
                <img
                  className="secondListItem"
                  alt="/#"
                  src="https://resource.logitech.com/w_797,c_limit,q_auto,f_auto,dpr_2.0/content/dam/logitech/en/homepage/product-grid/desktop-smart-home.png?v=1"
                />
                <span className="secondTextD">SMART HOME</span>
              </a>
              <a href="/#" className="presentationRemote">
                <img
                  className="secondListItem"
                  alt="/#"
                  src="https://resource.logitech.com/w_797,c_limit,q_auto,f_auto,dpr_2.0/content/dam/logitech/en/homepage/product-grid/desktop-presentation-remotes.png?v=1"
                />
                <span className="secondTextE">PRESENTATION REMOTES</span>
              </a>
            </div>
          </div>
          <div className="thirdProductListInfo">
            <div className="thirdListInfo">
              <a href="/#" className="imageA">
                <img
                  className="thirdListItem"
                  alt="/#"
                  src="https://resource.logitech.com/content/dam/logitech/en/homepage/product-grid/desktop-blue-bkg.jpg"
                />
                <img
                  className="logo"
                  alt="/"
                  src="https://www.logitech.com/content/dam/logitech/en/homepage/product-grid/desktop-blue.svg"
                />
              </a>
              <a href="/#" className="imageB">
                <img
                  className="thirdListItem"
                  alt="/#"
                  src="https://resource.logitech.com/content/dam/logitech/en/homepage/product-grid/desktop-logitech-g-bkg.jpg;"
                />
              </a>
              <a href="/#" className="imageC">
                <img
                  className="thirdListItem"
                  alt="/#"
                  src="https://resource.logitech.com/content/dam/logitech/en/homepage/product-grid/desktop-astro-bkg.jpg"
                />
              </a>
              <a href="/#" className="imageD">
                <img
                  className="thirdListItem"
                  alt="/#"
                  src="https://resource.logitech.com/content/dam/logitech/en/homepage/product-grid/desktop-jaybird-bkg.jpg
                "
                />
              </a>
              <a href="/#" className="imageE">
                <img
                  className="thirdListItem"
                  alt="/#"
                  src="https://resource.logitech.com/content/dam/logitech/en/homepage/product-grid/desktop-ultimate-ears-bkg.jpg"
                />
              </a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default CategoryTiles;
