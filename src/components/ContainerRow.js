import React from "react";
import DropdownSearch from "./DropdownSearch";
import "./ContainerRow.css";

import EngagementEntries from "./../api/testing";
class ContainerRow extends React.Component {
  state = {
    ClientNames: EngagementEntries.Clients,
    EngagementNames: EngagementEntries.Engagments
  };
  render() {
    return (
      <div className="ui segment">
        <div className="rowC">
          <DropdownSearch
            placeholder="Client Name"
            options={this.state.ClientNames}
          />
          <DropdownSearch
            placeholder="Engagement Name"
            options={this.state.EngagementNames}
          />
        </div>
      </div>
    );
  }
}

export default ContainerRow;
