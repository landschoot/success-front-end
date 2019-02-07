import React from "react";
class App extends React.Component {
  state = { labelText: "Enter Engagement Name" };
  render() {
    return (
      <div>
        <h1 className="header1" htmlFor="engagementName">
          {this.state.labelText}
        </h1>
        <input
          id="name"
          type="text"
          text="This will be a combo box eventually"
        />
      </div>
    );
  }
}
export default App;
