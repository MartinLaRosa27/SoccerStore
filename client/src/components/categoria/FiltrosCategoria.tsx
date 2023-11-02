import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function FiltrosCategoria(props: { nombreCategoria: String }) {
  const [texto, setTexto] = useState<String>("Filtrar por:");

  const handleClick = (mensaje: String) => {
    setTexto(mensaje);
  };

  return (
    <div id="FiltrosCategoria-categoria" className="container mb-4">
      <h3 className="mb-3">{props.nombreCategoria}</h3>
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="w-100"
        >
          {texto}
        </Dropdown.Toggle>

        <Dropdown.Menu className="w-100 text-center">
          <Dropdown.Item onClick={() => handleClick("Menor precio")}>
            Menor precio
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleClick("Mayor precio")}>
            Mayor precio
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleClick("Más nuevos")}>
            Más nuevos
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleClick("Más viejos")}>
            Más viejos
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default FiltrosCategoria;
