import { useState, useEffect } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { routes } from "./routes";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { gapi } from "gapi-script";
import FooterGlobal from "./components/global/FooterGlobal";
import Buscador from "./components/global/buscador/Buscador";
import Login from "./components/login";
import HeaderGlobal from "./components/global/header/Header";

function App() {
  const [showBuscador, setShowBuscador] = useState<boolean>(false);

  const isLoged = () => {
    return localStorage.getItem(import.meta.env.VITE_TOKEN_NAME);
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: import.meta.env.VITE_GOOGLE_CLIENT,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <BrowserRouter>
      <HeaderGlobal
        setShowBuscador={setShowBuscador}
        showBuscador={showBuscador}
      />
      <Switch>
        {routes.map((route, i) => (
          <Route exact path={route.path} key={i}>
            {route.isLoged && !isLoged() ? <Login /> : <route.component />}
          </Route>
        ))}
      </Switch>
      <FooterGlobal />
      <Buscador showBuscador={showBuscador} setShowBuscador={setShowBuscador} />
      <FloatingWhatsApp
        phoneNumber="+54 11 3789-0253"
        accountName="Martín Gabriel La Rosa"
        avatar="https://avatars.githubusercontent.com/u/82224898?v=4"
        statusMessage="En línea"
        chatMessage="¿Hola, como puedo ayudarte?"
        placeholder="Escribe un mensaje"
      />
    </BrowserRouter>
  );
}

export default App;
