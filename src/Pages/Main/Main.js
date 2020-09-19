import React, { Component } from 'react';
import Nav from '../../Component/Nav/Nav';
import NavBottom from '../../Component/NavBottom/SearchBar';
import Footer from '../../Component/Footer/Footer';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="mainWrap">
        <Nav />
        <NavBottom />
        <section>
          <div className="mainTop">
            <img
              alt="/#"
              className="mainBanner"
              src="https://resource.logitech.com/w_1800,h_1800,c_limit,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/homepage/hero-banners/learn-from-home-hpb-desktop.jpg?v=1
            "
            />
            <div>
              <div className="bannerText">
                <div className="bannerTopText">
                  <span>Learning from home made easier</span>
                </div>
                <div className="bannerMidText">
                  <h2>ENHANCE LEARNING EVERY DAY</h2>
                </div>
                <a href="#/">
                  <span>Learning Solutions</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
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
        </section>
        <section>
          <div className="secondBanner">
            <div className="bannerWrap">
              <div className="bannerInfo">
                <img
                  className="bannerProfile"
                  alt="/#"
                  src="https://resource.logitech.com/w_491,c_limit,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/social-impact/diversity-and-inclusion/accountability-and-action/accountability-bracken.png?v=1 1x, https://resource.logitech.com/w_491,c_limit,q_auto,f_auto,dpr_2.0/content/dam/logitech/en/social-impact/diversity-and-inclusion/accountability-and-action/accountability-bracken.png?v=1 2x"
                />
                <div className="bannerContent">
                  <h2>
                    "We are in, and have been in, a human rights crisis.
                    Logitech stands with and up for the Black community to
                    create positive change."
                  </h2>
                </div>
                <div className="bannerName">
                  <span>- Bracken Darrell, -</span>
                </div>
                <p>
                  "Logitech and its brands have made donations to:&nbsp;"
                  <a href="https://eji.org">Equal Justice Initiative</a>
                  ", "
                  <a href="https://www.splcenter.org">
                    Southern Poverty Law Center
                  </a>
                  ", "
                  <a href="https://www.welovelakestreet.com">
                    We Love Lake Street
                  </a>
                  " and other organizations that are fighting racial
                  inequities."
                </p>
                <a
                  class="commitments"
                  href="https://www.logitech.com/en-us/social-impact/diversity-inclusion/accountability-and-action.html"
                >
                  <span>Our Commitments</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="pangeaWrap">
            <div className="pangeaCmp">
              <a href="/#">
                <div className="pangeaPicA">
                  <span>SOCIAL IMPACT</span>
                </div>
              </a>
              <a href="/#">
                <div className="pangeaPicB">
                  <span>SUSTAINABILITY</span>
                </div>
              </a>
              <a href="/#">
                <div className="pangeaPicC">
                  <span>DESIGN AWARDS</span>
                </div>
              </a>
              <a href="/#">
                <div className="pangeaPicD">
                  <span>ABOUT US</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Main;
