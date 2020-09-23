import React, { Component } from "react";
import COLLECTION_LIST from "./SidebarCollectionData";

class CollectionFilter extends Component {
  constructor() {
    super();
    this.state = {
      filterList: COLLECTION_LIST,
    };
  }

  render() {
    return (
      <ul className="CollectionFilter">
        {this.state.filterList.map((subFilter) => {
          return (
            <li className="filterCollectionList" key={subFilter.id}>
              <label className="filterCollectionLabel">
                <input type="button" />
                {subFilter.filterName}
              </label>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CollectionFilter;
