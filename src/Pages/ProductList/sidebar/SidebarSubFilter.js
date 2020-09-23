import React, { Component } from "react";
import SIDIEBARFILTER from "./SidebarFilterData";

export default class SidebarSubFilter extends Component {
  constructor() {
    super();
    this.state = {
      filters: [],
    };
  }

  componentDidMount() {
    this.setState({
      filters: SIDIEBARFILTER,
    });
  }

  render() {
    return (
      <ul>
        {this.state.filters.map((filter) => {
          return (
            <li className="filterCollectionLIst">
              <label className="filterCollectionLabel">
                {/* <input type="checkbox" /> */}
                {filter.filterList}
              </label>
            </li>
          );
        })}
      </ul>
    );
  }
}
