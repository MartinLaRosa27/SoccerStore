import { useEffect, useState } from "react";
import { decodeToken } from "../../helpers/jwt";
import "./account.scss";

function Account() {
  const [usuarioDecode, setUsuarioDecode] = useState<any>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setUsuarioDecode(
      decodeToken(localStorage.getItem(import.meta.env.VITE_TOKEN_NAME))
    );
  }, []);

  return (
    <div id="Account">{usuarioDecode && <h1>{usuarioDecode.nombre}</h1>}</div>
  );
}

export default Account;
