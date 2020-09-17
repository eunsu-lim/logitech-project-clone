import React, { Component } from "react";
import "./infoBoxLink.scss";
class InfoBoxTopLink extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.links.map((link, index) => {
            return (
              <li key={index} className="links">
                <a href="http://localhost:3000/Account">{link}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default InfoBoxTopLink;
