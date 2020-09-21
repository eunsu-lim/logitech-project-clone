import React, { Component } from "react";

export default class FilterList extends Component {
  render() {
    return (
      <div>
        {this.props.List.map((filter) => {
          return (
            <li>
              <input type="checkbox" />
              {filter}
            </li>
          );
        })}
      </div>
    );
  }
}
