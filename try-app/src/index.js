import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

function MyApp() {
  return (
    <div className="style">
      <h1>Hello World</h1>
      <p>Whatta fuck brother</p>
      <ul>
        <li>Sunny Beach</li>
        <li>Les 2 Alps</li>
        <li>Lido di Jesolo</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
