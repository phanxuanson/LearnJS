import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"; // alias
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
