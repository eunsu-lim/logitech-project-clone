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
            <li key={el.id}>
              <a href={el.url}>{el.businessCategory}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BusinessList;
