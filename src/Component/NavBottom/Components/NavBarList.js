import React, { Component } from 'react';
import './NavBarList.scss';

class NavBarList extends Component {
  render() {
    const { mainMenu } = this.props;

    return (
      <ul className="productList">
        <li className="mainCategory">{mainMenu.category}</li>
        {mainMenu.subcategory.map((el) => {
          return (
            <a href={el.url}>
              <li key={el.id}>{el.category}</li>
            </a>
          );
        })}
      </ul>
    );
  }
}

export default NavBarList;
