import React from "react";
import DropdownSearch from "./DropdownSearch";
import ContainerRow from "./ContainerRow";

// import ClientNames from "./../api/testing";
class App extends React.Component {
  state = { titleText: "Select Engagement Details" };

  renderContent() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h1 className="header1" htmlFor="engagementName">
          {this.state.titleText}
        </h1>
        <ContainerRow />
      </div>
    );
  }

  render() {
    console.log(this.state.clientNames);
    return <div className="border red"> {this.renderContent()}</div>;
  }
}
export default App;
