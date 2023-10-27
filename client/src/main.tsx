import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PruebaContext } from "./context/PruebaContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PruebaContext>
      <App />
    </PruebaContext>
  </React.StrictMode>
);
