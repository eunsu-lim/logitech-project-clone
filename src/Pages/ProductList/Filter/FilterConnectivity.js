import React, { Component } from "react";
import Filter1 from "./Filter1";

class filterConnectivity extends Component {
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
    return (
      <div className="filterTitle">
        <button className="filterCollection" onClick={this.openFilter}>
          <span className={this.state.isOpened ? "expanded" : "collapsed"}>
            COLLECTION
          </span>
          <img src={this.state.collectionIcon} />
        </button>
        {this.state.isOpened && <Filter1 />}
      </div>
    );
  }
}

export default filterConnectivity;
