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
            <a href={el.url}>
              <li key={el.id}>{el.supportCategory}</li>
            </a>
          );
        })}
      </ul>
    );
  }
}

export default SupportList;
