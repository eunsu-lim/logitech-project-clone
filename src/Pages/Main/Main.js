import React, { Component } from "react";
import Nav from "../../Component/Nav/Nav";
import NavBottom from "../../Component/NavBottom/SearchBar";
import MainBanner from "./componenets/MainBanner";
import CategoryTiles from "./componenets/CategoryTiles";
import PangeaImg from "./Data/pangeaImg";
import Footer from "../../Component/Footer/Footer";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="mainWrap">
        <Nav />
        <NavBottom />
        <section>
          <div>
            <MainBanner />
          </div>
        </section>
        <section>
          <CategoryTiles />
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
                  "Logitech and its brands have made donations to:&nbsp;" Equal
                  Justice Initiative ", " Southern Poverty Law Center ", " We
                  Love Lake Street " and other organizations that are fighting
                  racial inequities."
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
              {PangeaImg.map(({ id, name }) => {
                return (
                  <div className={`pangeaPic${id}`}>
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Main;
