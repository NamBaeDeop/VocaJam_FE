import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import VocaMain from "./jsx/VocaMain/VocaMain";
// import VocaAdd from "../src/jsx/VocaMain/VocaAdd";
import VocaMain from "./jsx/VocaMain/VocaMain";
// import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <VocaMain />
  // {/* </React.StrictMode> */}
);

reportWebVitals();
