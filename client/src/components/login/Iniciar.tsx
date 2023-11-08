import { useState, useEffect } from "react";
import { useUsuarioContext } from "../../context/UsuarioContext";
import { AiFillLock } from "react-icons/ai";

function Iniciar(props: { setShowIniciar: any; showIniciar: any }) {
  const [shown, setShown] = useState(false);
  const { getUsuario } = useUsuarioContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.showIniciar]);

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (await getUsuario({ email, password })) {
      window.location.href = "/";
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group" style={{ margin: "25px 0" }}>
          <label htmlFor="password">Contraseña:</label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              type={shown ? "text" : "password"}
              id="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <AiFillLock
              className="icon-lock"
              onClick={() => setShown(!shown)}
            />
          </div>
        </div>

        <div className="btn-cont">
          <button type="submit" className="btn btn-primary">
            Iniciar sesión
          </button>
          <small onClick={() => props.setShowIniciar(false)}>Registrarse</small>
        </div>
      </form>
    </div>
  );
}

export default Iniciar;
