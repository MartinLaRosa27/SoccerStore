import { useState, useEffect } from "react";
import { useUsuarioContext } from "../../context/UsuarioContext";
import Formulario from "./Formulario";
import Spinner from "../global/Spinner";
import "./account.scss";

function Account() {
  const { getUsuarioInformationToken } = useUsuarioContext();
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
      <h3 className="container">Mis datos</h3>
      {usuarioInformation ? <Formulario usuarioInformation={usuarioInformation} /> : <Spinner />}
    </div>
  );
}

export default Account;
