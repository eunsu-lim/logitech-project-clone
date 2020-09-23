import React, { Component } from "react";
import "./BusinessList.scss";

class BusinessList extends Component {
  render() {
    const { mainMenu } = this.props;

    return (
      <ul className="businessListWrap">
        <li className="businessList">{mainMenu.businessCategory}</li>
        {mainMenu.subcategory.map((el) => {
          return (
            <a href={el.url}>
              <li key={el.id}>{el.businessCategory}</li>
            </a>
          );
        })}
      </ul>
    );
  }
}

export default BusinessList;
