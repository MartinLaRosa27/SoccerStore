import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CategoriaContext } from "./context/CategoriaContext.jsx";
import { ProductoContext } from "./context/ProductoContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CategoriaContext>
      <ProductoContext>
        <Toaster />
        <App />
      </ProductoContext>
    </CategoriaContext>
  </React.StrictMode>
);
