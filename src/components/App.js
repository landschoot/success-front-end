import React from "react";
import ContainerRow from "./ContainerRow";

// import ClientNames from "./../api/testing";
class App extends React.Component {
  /*The State of this compoenent holds any pertinent information in the component.
    Usually, parent compoent's states get passed down to child components through
    the props system */
  state = { titleText: "Select Engagement Details" };

  /*This render Content method will call every time the Render method is called.
    Since render is usually called a lot, we don't want to put a lot of, or any,
    logic inside the render() method itself. So decision trees of which
    screen to go to, what to display at certain times, will usually end
    up in a method similar to RenderContent as opposed to render itself
   */
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
    return <div className="border red"> {this.renderContent()}</div>;
  }
}
export default App;
