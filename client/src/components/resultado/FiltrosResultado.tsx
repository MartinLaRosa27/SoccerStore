import Dropdown from "react-bootstrap/Dropdown";

function FiltrosResultado(props: {
  nombreCategoria: String;
  setFiltro: any;
  filtro: String;
}) {
  const handleClick = (mensaje: String) => {
    props.setFiltro(mensaje);
  };

  return (
    <div id="FiltrosResultado-resultado" className="container mb-4">
      <h3 className="mb-3">
        Resultados de: <strong>{props.nombreCategoria}</strong>
      </h3>
      <Dropdown>
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          className="w-100 fw-bold text-uppercase fw-italic"
        >
          {props.filtro}
        </Dropdown.Toggle>

        <Dropdown.Menu className="w-100 text-center">
          <Dropdown.Item onClick={() => handleClick("Menor precio")}>
            Menor precio
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleClick("Mayor precio")}>
            Mayor precio
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleClick("Mas nuevos")}>
            Más nuevos
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleClick("Mas viejos")}>
            Más viejos
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default FiltrosResultado;
