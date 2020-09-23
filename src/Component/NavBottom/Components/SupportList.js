import React, { Component } from "react";
import "./SupportList.scss";

class SupportList extends Component {
  render() {
    const { mainMenu } = this.props;

    return (
      <ul className="supportListWrap">
        <li className="supportList">{mainMenu.supportCategory}</li>
        {mainMenu.subcategory.map((el) => {
          return (
            <li key={el.id}>
              <a href={el.url}>{el.supportCategory}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default SupportList;
