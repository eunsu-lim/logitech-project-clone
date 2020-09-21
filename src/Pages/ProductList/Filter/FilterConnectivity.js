import React, { Component } from "react";
import Filter1 from "./Filter1";

class filterConnectivity extends Component {
  state = {
    isOpened: false,
  };

  openFilter = () => {
    this.setState({
      isOpened: !this.state.isOpened,
    });
  };

  render() {
    return (
      <div className="filterTitle">
        <button onClick={this.openFilter}>
          COLLECTION
          <img src="https://www.logitech.com/images/icons/icon-expand.svg" />
        </button>
        {this.state.isOpened && <Filter1 />}
      </div>
    );
  }
}

export default filterConnectivity;
