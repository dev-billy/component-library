import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/Button";
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: component-library</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Button variant="outlined" color="secondary" />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
