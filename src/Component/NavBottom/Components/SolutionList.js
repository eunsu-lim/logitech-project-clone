import React, { Component } from "react";
import "./SolutionList.scss";

class SolutionList extends Component {
  render() {
    const { mainMenu } = this.props;

    return (
      <ul className="solutionWrap">
        <li className="solutionList">{mainMenu.solutionCategory}</li>
        {mainMenu.subcategory.map((el) => {
          return (
            <li key={el.id}>
              <a href={el.url}>{el.solutionCategory}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default SolutionList;
