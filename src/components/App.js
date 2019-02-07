import React from "react";
import DropDownSearch from "./DropdownSearch";
class App extends React.Component {
  state = { labelText: "Enter Engagement Name" };
  render() {
    return (
      <div>
        <h1 className="header1" htmlFor="engagementName">
          {this.state.labelText}
        </h1>
        <DropDownSearch />
      </div>
    );
  }
}
export default App;
