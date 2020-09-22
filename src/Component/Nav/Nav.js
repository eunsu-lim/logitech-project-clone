import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="topBar">
          <div className="navWrapper">
            <ul className="navLeft">
              <li>
                <a href="#/">
                  <div className="lightLogo lightLogoA"></div>
                </a>
              </li>
              <li>
                <a href="/#">
                  <div className="lightLogo lightLogoB"></div>
                </a>
              </li>
              <li>
                <a href="/#">
                  <div className="lightLogo lightLogoC"></div>
                </a>
              </li>
              <li>
                <a href="/#">
                  <div className="lightLogo lightLogoD"></div>
                </a>
              </li>
              <li>
                <a href="/#">
                  <div className="lightLogo lightLogoE"></div>
                </a>
              </li>
            </ul>
            <ul className="navRight">
              <li>
                <a className="flagLink" href="/#">
                  <span className="flag"></span>
                  <span>EN</span>
                </a>
              </li>
              <li>
                <a className="accountLink" href="/#">
                  <span className="account"></span>
                  <span>MY ACCOUNT</span>
                </a>
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
