import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import VocaModal from "./jsx/VocaModal/VocaModal";
// import VocaPage from "./jsx/VocaPage/VocaPage";
import reportWebVitals from "./reportWebVitals";
import VocaCard from "./jsx/VocaCard/VocaCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <App />
  // <VocaPage/>
  <>
    <VocaCard/>
  </>
  // </React.StrictMode>
);

reportWebVitals();
