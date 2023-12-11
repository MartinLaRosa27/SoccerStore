import { useState, useEffect } from "react";
import { useUsuarioContext } from "../../context/UsuarioContext";
import { Helmet } from "react-helmet";
import Formulario from "./Formulario";
import Spinner from "../global/Spinner";
import "./account.scss";

function Account() {
  const { getUsuarioInformationToken, patchUser } = useUsuarioContext();
  const [usuarioInformation, setUsuarioInformation] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    callGetUsuarioInformationToken();
  }, []);

  const callGetUsuarioInformationToken = async () => {
    setUsuarioInformation(
      await getUsuarioInformationToken(
        localStorage.getItem(import.meta.env.VITE_TOKEN_NAME)
      )
    );
  };

  return (
    <div id="account">
      <Helmet>
        <title>SoccerStore | Mi Datos</title>
      </Helmet>
      <h3 className="container">Mis datos</h3>
      {usuarioInformation ? (
        <Formulario
          usuarioInformation={usuarioInformation}
          patchUser={patchUser}
        />
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Account;
