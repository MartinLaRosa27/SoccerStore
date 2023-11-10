import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CategoriaContext } from "./context/CategoriaContext.jsx";
import { ProductoContext } from "./context/ProductoContext.jsx";
import { Toaster } from "react-hot-toast";
import { UsuarioContext } from "./context/UsuarioContext.jsx";
import { CarritoContext } from "./context/CarritoContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CategoriaContext>
      <ProductoContext>
        <UsuarioContext>
          <CarritoContext>
            <Toaster />
            <App />
          </CarritoContext>
        </UsuarioContext>
      </ProductoContext>
    </CategoriaContext>
  </React.StrictMode>
);
