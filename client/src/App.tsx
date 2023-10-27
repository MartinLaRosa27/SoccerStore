import { useEffect } from "react";
import { usePruebaContext } from "./context/PruebaContext";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { routes } from "./routes";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarGlobal from "./components/global/NavbarGlobal";
import FooterGlobal from "./components/global/FooterGlobal";

function App() {
  const { getValues } = usePruebaContext();

  useEffect(() => {
    getValues();
  }, []);

  return (
    <BrowserRouter>
      <NavbarGlobal />
      <Switch>
        {routes.map((route, i) => (
          <Route exact path={route.path} key={i}>
            <route.component />
          </Route>
        ))}
      </Switch>
      <FooterGlobal />
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
