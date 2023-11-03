import { useState } from "react";
import logoCompleto from "../../assets/img/global/logo-completo.webp";
import Iniciar from "./Iniciar";
import Registrarse from "./Registrarse";
import "./login.scss";

function Login() {
  const [showIniciar, setShowIniciar] = useState(false);

  return (
    <div id="login">
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
