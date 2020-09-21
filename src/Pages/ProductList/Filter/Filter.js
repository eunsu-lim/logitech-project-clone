import React, { Component } from "react";
import FILTER from "./Filterdata";
import FilterList from "./filterList";

class Filter extends Component {
  constructor() {
    super();
    {
      this.state = {
        filterList: [],
      };
    }
  }

  componentDidMount() {
    this.setState({
      filterList: FILTER,
    });
  }

  render() {
    const { filterList } = this.state;
    return (
      <div>
        <ul>
          {filterList.map((filter) => {
            return (
              <li>
                {filter.filterTitle}
                <FilterList FilterList={filter.filterList} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Filter;
