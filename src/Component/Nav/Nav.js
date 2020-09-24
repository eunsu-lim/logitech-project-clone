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
                <Link to="/account">
                  <span>MY ACCOUNT</span>
                </Link>
              </li>
              <li>
                <span>MY CART</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
