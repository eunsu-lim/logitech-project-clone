import React, { Component } from "react";
import CollectionFilter from "./SidebarCollectionSubfilter";

class SidebarfilterColletcion extends Component {
  state = {
    isOpened: false,
    collectionIcon: "https://www.logitech.com/images/icons/icon-expand.svg",
  };

  openFilter = () => {
    const expandIcon = "https://www.logitech.com/images/icons/icon-expand.svg";
    const collapseIcon =
      "https://www.logitech.com/images/icons/icon-collapse.svg";
    this.setState({
      isOpened: !this.state.isOpened,
      collectionIcon: !this.state.isOpened ? collapseIcon : expandIcon,
    });
  };

  render() {
    const { isOpened, collectionIcon } = this.state;
    return (
      <div className="filterTitle">
        <button className="filterCollection" onClick={this.openFilter}>
          <span className={isOpened ? "expanded" : "collapsed"}>
            COLLECTION
          </span>
          <img alt="icon" src={collectionIcon} />
        </button>
        {isOpened && <CollectionFilter />}
      </div>
    );
  }
}

export default SidebarfilterColletcion;
