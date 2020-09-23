import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./infoBoxLink.scss";

class InfoBoxBottomLink extends Component {
  render() {
    const { links } = this.props;
    return (
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index} className="links">
              <Link to="http://localhost:3000/Account">{link}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default InfoBoxBottomLink;
