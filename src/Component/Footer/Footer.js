import React, { Component } from "react";
import SITE_MAP from "./Data/siteMapData";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="container">
          <div className="footerSiteMap">
            <ul className="siteMap">
              {SITE_MAP.map(({ id, content }) => {
                return (
                  <ul>
                    <li key={id}>{content}</li>
                  </ul>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="footerContactWrap">
          <div className="footerContact">
            <div className="socialIcon">
              <img
                alt="facebook"
                src="https://www.logitech.com/content/dam/logitech/common/facebook.svg"
              />
              <img
                alt="twitter"
                src="https://www.logitech.com/content/dam/logitech/common/twitter.svg"
              />
              <img
                alt="instagram"
                src="https://www.logitech.com/content/dam/logitech/common/instagram-logo.svg"
              />
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
                    "Yes, I want to receive news and product emails. Read our
                    privacy policy"
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
