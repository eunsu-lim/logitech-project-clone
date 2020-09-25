import React, { Component } from "react";
import SIDIEBAR_PRODUCT_FILTER from "./SidebarFilterData";
//import SidebarSubFilter from "./SidebarSubFilter";

export default class SidebarFilter extends Component {
  constructor() {
    super();
    this.state = {
      sidebarFilterList: SIDIEBAR_PRODUCT_FILTER,
      isOpened: false,
      isCheckOpened: [false, false, false, false, false, false],
      expandIcon: "https://www.logitech.com/images/icons/icon-expand.svg",
      collapseIcon: "https://www.logitech.com/images/icons/icon-collapse.svg",
    };
  }

  openSubFilter = (idx) => {
    const { isCheckOpened } = this.state;
    this.setState({
      isCheckOpened: isCheckOpened.map((isChecked, index) => {
        if (index === idx) {
          return !isChecked;
        }
        return isChecked;
      }),
    });
  };

  render() {
    const { sidebarFilterList, isCheckOpened } = this.state;
    const collapseIcon =
      "https://www.logitech.com/images/icons/icon-collapse.svg";
    const expandIcon = "https://www.logitech.com/images/icons/icon-expand.svg";
    return (
      <div className="SidebarFilter">
        {sidebarFilterList.map((filter, index) => {
          return (
            <ul key={index}>
              <div className="filterTitle">
                <button
                  className="filterCollection"
                  onClick={() => this.openSubFilter(index)}
                >
                  <span
                    className={isCheckOpened[index] ? "expanded" : "collapsed"}
                  >
                    {filter.filterTitle}
                  </span>
                  <img src={isCheckOpened[index] ? collapseIcon : expandIcon} />
                </button>
                {/*<SidebarSubFilter />} */}
                <li className="filterCollectionList">
                  <label className="filterCollectionLabel">
                    {isCheckOpened[index] &&
                      filter.filterList.map((subfilter) => {
                        return (
                          <div>
                            <input type="button" />
                            <label className="subfilter">{subfilter}</label>
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
