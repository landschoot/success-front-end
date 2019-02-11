// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

/*
TODO (alphabetic IDs, but sequential order not required):
a. Create continue button at the bottom right corner
    of the screen. Upon pushing this button change
    to a different screen while also doing task {b}
b. Pull engagement selection from the dropdwon menus
    and store them, so as to have search terms for the
    success story database
c.  Build second screen of Engagement Details
    pg 19 in the document
*/
ReactDOM.render(<App />, document.querySelector("#root"));
