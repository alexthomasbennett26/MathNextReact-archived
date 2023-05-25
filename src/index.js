import React from "react";
import ReactDOM from "react-dom/client";

import "./Dashboard.css";
import App from "./App";
import Dashboard from "./Dashboard";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Dashboard greeting="yoyo" />
  </React.StrictMode>
);
