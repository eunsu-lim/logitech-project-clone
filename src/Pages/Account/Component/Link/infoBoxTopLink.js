import React, { Component } from "react";
import "./infoBoxLink.scss";
import { Link } from 'react-router-dom';

class InfoBoxTopLink extends Component {
  render() {
    const { links } = this.props;
    return (
      <div>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index} className="links">
                <Link to="http://localhost:3000/Account">{link}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default InfoBoxTopLink;
