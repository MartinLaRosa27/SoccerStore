import { useState } from "react";
import { Helmet } from "react-helmet";
import { GoogleLogin } from "react-google-login";
import { useUsuarioContext } from "../../context/UsuarioContext";
import logoCompleto from "../../assets/img/global/logo-completo.webp";
import Iniciar from "./Iniciar";
import Registrarse from "./Registrarse";
import "./login.scss";
import Spinner from "../global/Spinner";

function Login() {
  const { postUsuario, getUsuario } = useUsuarioContext();
  const [showIniciar, setShowIniciar] = useState(false);
  const [showSpinner, sethowSpinner] = useState(false);

  const onSuccess = async (res: any) => {
    if (res.profileObj) {
      sethowSpinner(true);
      const values = {
        email: res.profileObj.email,
        nombre: res.profileObj.name,
        password: res.profileObj.googleId,
      };
      if (await postUsuario(values)) {
        window.location.href = "/";
      } else if (await getUsuario(values)) {
        window.location.href = "/";
      }
    }
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

      {!showSpinner ? (
        <>
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
            <Iniciar
              setShowIniciar={setShowIniciar}
              showIniciar={showIniciar}
            />
          ) : (
            <Registrarse
              setShowIniciar={setShowIniciar}
              showIniciar={showIniciar}
            />
          )}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Login;
