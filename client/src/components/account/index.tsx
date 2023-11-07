import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { decodeToken } from "../../helpers/jwt";
import "./account.scss";

function Account() {
  const [usuarioDecode, setUsuarioDecode] = useState<any>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      setUsuarioDecode(
        decodeToken(localStorage.getItem(import.meta.env.VITE_TOKEN_NAME))
      );
    } catch (e: any) {
      toast.error("Por favor, ingresa de nuevo", {
        style: {
          background: "#333",
          color: "#fff",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "80px",
        },
      });
      localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME);
      window.location.reload();
    }
  }, []);

  return <div id="Account">{usuarioDecode && <h1>Hola mundo</h1>}</div>;
}

export default Account;
