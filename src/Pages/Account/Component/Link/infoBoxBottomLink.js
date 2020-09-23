import React, { Component } from "react";
import "./infoBoxLink.scss";

class InfoBoxBottomLink extends Component {
  render() {
    const { links } = this.props;
    return (
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index} className="links">
              <a href="http://localhost:3000/Account">{link}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default InfoBoxBottomLink;
