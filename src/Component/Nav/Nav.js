import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import NAV_LOGO from "./Data/navLogoImg";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      navLogo: NAV_LOGO,
      navImgHover: false,
    };
  }

  render() {
    return (
      <nav>
        <div className="topBar">
          <div className="navWrapper">
            <ul className="navLeft">
              {this.state.navLogo.map(({ id }) => {
                return <div className={`lightLogo lightLogo${id}`} />;
              })}
            </ul>
            <ul className="navRight">
              <li>
                <a className="flagLink" href="/#">
                  <span className="flag"></span>
                  <span>EN</span>
                </a>
              </li>
              <li>
                <Link to="/account">
                  <div className="accountLink">
                    <span className="account"></span>
                    <span>MY ACCOUNT</span>
                  </div>
                </Link>
              </li>
              <li>
                <a className="cartLink" href="/#">
                  <span className="cart"></span>
                  <span>MY CART</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
