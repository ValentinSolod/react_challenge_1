import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./i18n/config";
import "./assets/style/fonts.css";
import "./assets/style/index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
