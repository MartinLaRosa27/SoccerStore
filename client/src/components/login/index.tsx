import { useState } from "react";
import { Helmet } from "react-helmet";
import { GoogleLogin } from "react-google-login";
import logoCompleto from "../../assets/img/global/logo-completo.webp";
import Iniciar from "./Iniciar";
import Registrarse from "./Registrarse";
import "./login.scss";

function Login() {
  const [showIniciar, setShowIniciar] = useState(false);

  const onSuccess = (res: any) => {
    console.log("ok", res.profileObj);
  };

  const onFailure = (res: any) => {
    console.log("not ok", res);
  };

  return (
    <div id="login">
      <Helmet>
        <title>SoccerStore | Iniciar Sesión</title>
      </Helmet>
      <img className="logo-completo" src={logoCompleto} alt="SoccerStore" />

      <div className="contener-google">
        <GoogleLogin
          clientId={import.meta.env.VITE_GOOGLE_CLIENT}
          buttonText="Ingresar con Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy="single_host_origin"
          isSignedIn={true}
        />

        <p>o</p>
      </div>

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
