import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import VocaModal from "./jsx/VocaModal/VocaModal";
// import VocaPage from "./jsx/VocaPage/VocaPage";
import VocaCard from "./jsx/VocaCard/VocaCard";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <App />
  // <VocaModal/>
  // <VocaPage/>
  <>
    <VocaCard/>
  </>
  // </React.StrictMode>
);

reportWebVitals();
