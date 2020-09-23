import React, { Component } from "react";
import DATA from "./FilterConnectivityData";

class Filter1 extends Component {
  constructor() {
    super();
    this.state = {
      filterList: [],
    };
  }

  componentDidMount() {
    this.setState({
      filterList: DATA,
    });
  }

  render() {
    return (
      <ul>
        {this.state.filterList.map((filter) => {
          return (
            <li className="filterCollectionList" key={filter.id}>
              <label className="filterCollectionLabel">
                <input type="button" />
                {filter.filterName}
              </label>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Filter1;
