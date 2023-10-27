import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PruebaContext } from "./context/PruebaContext.jsx";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PruebaContext>
      <App />
      <FloatingWhatsApp
        phoneNumber="+54 11 3789-0253"
        accountName="Martín Gabriel La Rosa"
        avatar="https://avatars.githubusercontent.com/u/82224898?v=4"
        statusMessage="En línea"
        chatMessage="¿Hola, como puedo ayudarte?"
        placeholder="Escribe un mensaje"
      />
    </PruebaContext>
  </React.StrictMode>
);
