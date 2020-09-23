import React, { Component } from "react";
import "./Footer.scss";
import SITE_MAP from "./Data/siteMapData";

class Footer extends Component {
  state = {
    siteMapList: SITE_MAP,
  };

  render() {
    const { siteMapList } = this.state;
    return (
      <footer className="Footer">
        <div className="container">
          <div className="footerSiteMap">
            <ul className="siteMap">
              {siteMapList.map(({ id, content }) => {
                return (
                  <div>
                    <li key={id}>{content}</li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="footerContactWrap">
          <div className="footerContact">
            <div className="socialIcon">
              <a href="/#">
                <img
                  alt="facebook"
                  src="https://www.logitech.com/content/dam/logitech/common/facebook.svg"
                />
              </a>
              <a href="/#">
                <img
                  alt="twitter"
                  src="https://www.logitech.com/content/dam/logitech/common/twitter.svg"
                />
              </a>
              <a href="/#">
                <img
                  alt="instagram"
                  src="https://www.logitech.com/content/dam/logitech/common/instagram-logo.svg"
                />
              </a>
            </div>
          </div>
          <div className="subscriptionWrap">
            <form>
              <div>
                <input type="email" placeholder="ENTER EMAIL ADDRESS" />
                <button type="submit">
                  <span className="submitIcon"></span>
                </button>
              </div>
              <div>
                <label className="subscriptionLabel">
                  <input type="checkbox" />
                  <span>
                    "Yes, I want to receive news and product emails. Read our"
                    <a href="/#">privacy policy</a>
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
