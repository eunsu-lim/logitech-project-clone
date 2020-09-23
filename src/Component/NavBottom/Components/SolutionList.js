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
            <a href={el.url}>
              <li key={el.id}>{el.solutionCategory}</li>
            </a>
          );
        })}
      </ul>
    );
  }
}

export default SolutionList;
