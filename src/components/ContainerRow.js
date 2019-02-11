import React from "react";
import DropdownSearch from "./DropdownSearch";
/* this import of the .css is for organizing the <div>'s 
    into something more palatable*/
import "./ContainerRow.css";

/* importing test data */
import EngagementEntries from "./../api/testing";

class ContainerRow extends React.Component {
  // State can only be declared at the very beginning of a class
  state = {
    ClientNames: EngagementEntries.Clients,
    EngagementNames: EngagementEntries.Engagments
  };

  render() {
    return (
      <div className="ui segment">
        <div className="rowC">
          {/* placeholder and options here are props were specifically
        named and chosen at time of development. they get passed down
        to the child component for use */}
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
