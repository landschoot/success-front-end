import React from "react";
import DropdownSearch from "./DropdownSearch";
/* this import of the .css is for organizing the <div>'s 
    into something more palatable*/
import "./ProjectEntry.css";

/* importing test data */
import DropdownOptions from "../api/testing";

class ProjectEntry extends React.Component {
  /*The State of this compoenent holds any pertinent information in the component.
    Usually, parent compoent's states get passed down to child components through
    the props system */
  state = {
    Industries: DropdownOptions.ProjectEntries.Industry,
    Technologies: DropdownOptions.ProjectEntries.Technology,
    Practices: DropdownOptions.ProjectEntries.Practice,
    titleText: "Project Details"
  };

  render() {
    return (
      <div>
        <h1 className="header1" htmlFor="projectPageHead">
          {this.state.titleText}
        </h1>
        <div className="ui segment">
          <div className="rowC">
            {/* placeholder and options here are props were specifically
        named and chosen at time of development. they get passed down
        to the child component for use */}
            <DropdownSearch
              placeholder="Industry"
              options={this.state.Industries}
            />
            <DropdownSearch
              placeholder="Technology"
              options={this.state.Technologies}
            />
            <DropdownSearch
              placeholder="Practice"
              options={this.state.Practices}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectEntry;
