import React from "react";
import EngagementEntry from "./EngagementEntry";
import ProjectEntry from "./ProjectEntry";

// import ClientNames from "./../api/testing";
class App extends React.Component {
  /*This render Content method will call every time the Render method is called.
    Since render is usually called a lot, we don't want to put a lot of, or any,
    logic inside the render() method itself. So decision trees of which
    screen to go to, what to display at certain times, will usually end
    up in a method similar to RenderContent as opposed to render itself
   */
  renderContent() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <EngagementEntry />
        <ProjectEntry />
      </div>
    );
  }

  render() {
    return <div className="border red"> {this.renderContent()}</div>;
  }
}
export default App;
