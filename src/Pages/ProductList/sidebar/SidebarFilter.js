import React, { Component } from "react";
import SIDIEBARFILTER from "./SidebarFilterData";
import SidebarSubFilter from "./SidebarSubFilter";

export default class SidebarFilter extends Component {
  constructor() {
    super();
    this.state = {
      filterList: [],
      isOpened: false,
      collectionIcon: "https://www.logitech.com/images/icons/icon-expand.svg",
    };
  }

  componentDidMount() {
    this.setState({
      filterList: SIDIEBARFILTER,
    });
  }

  openSubFilter = () => {
    const expandIcon = "https://www.logitech.com/images/icons/icon-expand.svg";
    const collapseIcon =
      "https://www.logitech.com/images/icons/icon-collapse.svg";
    this.setState({
      isOpened: !this.state.isOpened,
      collectionIcon: !this.state.isOpened ? collapseIcon : expandIcon,
    });
  };

  render() {
    const { filterList } = this.state;
    return (
      <div>
        {filterList.map((filter, index) => {
          return (
            <div className="filterTitle">
              <button className="filterCollection" onClick={this.openSubFilter}>
                <span
                  className={this.state.isOpened ? "expanded" : "collapsed"}
                >
                  {filter.filterTitle}
                </span>
                <img src={this.state.collectionIcon} />
              </button>
              {this.state.isOpened && <SidebarSubFilter />}
            </div>
          );
        })}
      </div>
    );
  }
}

{
  /* render() {
    const { filterList } = this.state;
    return (
      <div>
        {filterList.map((filter) => {
          return (
            <ul>
              {filter.filterTitle}
              <li>
                {filter.filterList.map((subfilter) => {
                  return (
                    <div>
                      <input type="checkbox" name={subfilter} />
                      {subfilter}
                    </div>
                  );
                })}
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
} */
}
