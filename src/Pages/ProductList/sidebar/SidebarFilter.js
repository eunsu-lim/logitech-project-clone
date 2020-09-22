import React, { Component } from "react";
import SIDIEBARFILTER from "./SidebarFilterData";

export default class SidebarFilter extends Component {
  constructor() {
    super();
    this.state = {
      filterList: SIDIEBARFILTER,
      isOpened: false,
      isCheckOpened: [false, false, false, false, false],
      collectionIcon: "https://www.logitech.com/images/icons/icon-expand.svg",
    };
  }

  openSubFilter = (idx) => {
    const expandIcon = "https://www.logitech.com/images/icons/icon-expand.svg";
    const collapseIcon =
      "https://www.logitech.com/images/icons/icon-collapse.svg";
    // this.setState({
    //   isOpened: !this.state.isOpened,
    //   collectionIcon: !this.state.isOpened ? collapseIcon : expandIcon,
    // });
    const temp = [...this.state.isCheckOpened];
    temp[idx] = !temp[idx];
    this.setState({ isCheckOpened: temp });
  };

  render() {
    const { filterList } = this.state;
    return (
      <div>
        {filterList.map((filter, index) => {
          return (
            <ul>
              <div className="filterTitle">
                <button
                  className="filterCollection"
                  onClick={() => this.openSubFilter(index)}
                >
                  <span
                    className={
                      this.state.isCheckOpened[index] ? "expanded" : "collapsed"
                    }
                  >
                    {filter.filterTitle}
                  </span>
                  <img src={this.state.collectionIcon} />
                </button>
                <li className="filterCollectionList">
                  <label className="filterCollectionLabel">
                    {this.state.isCheckOpened[index] &&
                      filter.filterList.map((subfilter) => {
                        return (
                          <div>
                            <input type="checkbox" />
                            {subfilter}
                          </div>
                        );
                      })}
                  </label>
                </li>
              </div>
            </ul>
          );
        })}
      </div>
    );
  }
}
