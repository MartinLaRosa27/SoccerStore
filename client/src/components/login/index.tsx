import { useState } from "react";
import { Helmet } from "react-helmet";
import logoCompleto from "../../assets/img/global/logo-completo.webp";
import Iniciar from "./Iniciar";
import Registrarse from "./Registrarse";
import "./login.scss";

function Login() {
  const [showIniciar, setShowIniciar] = useState(false);

  return (
    <div id="login">
      <Helmet>
        <title>SoccerStore | Iniciar Sesión</title>
      </Helmet>
      <img className="logo-completo" src={logoCompleto} alt="SoccerStore" />
      {showIniciar ? (
        <Iniciar setShowIniciar={setShowIniciar} showIniciar={showIniciar} />
      ) : (
        <Registrarse
          setShowIniciar={setShowIniciar}
          showIniciar={showIniciar}
        />
      )}
    </div>
  );
}

export default Login;
