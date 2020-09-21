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
    console.log("najieun22");
    console.log(this.state.filterList);
    return (
      <ul>
        {/* {this.state.filterList.map((filter, index) => {
                    return (
                        <li key={index}>
                            <label>
                                <input type="checkbox" />
                                {filter.filterName}
                            </label>
                        </li>
                    )
                })} */}

        {this.state.filterList.map((filter, i) => {
          return (
            <li key={i}>
              <label>
                <input type="checkbox" />
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
