import React from "react";
import DropdownSearch from "./DropdownSearch";
/* this import of the .css is for organizing the <div>'s 
    into something more palatable*/
import "./EngagementEntry.css";

/* importing test data */
import EngagementEntries from "../api/testing";

class EngagementEntry extends React.Component {
  /*The State of this compoenent holds any pertinent information in the component.
    Usually, parent compoent's states get passed down to child components through
    the props system */
  state = {
    ClientNames: EngagementEntries.Clients,
    EngagementNames: EngagementEntries.Engagments,
    titleText: "Select Engagement Details"
  };

  render() {
    return (
      <div>
        <h1 className="header1" htmlFor="engagementName">
          {this.state.titleText}
        </h1>
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
      </div>
    );
  }
}

export default EngagementEntry;
