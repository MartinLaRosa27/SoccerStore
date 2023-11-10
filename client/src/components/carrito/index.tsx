import Tarjeta from "./Tarjeta";
import "./carrito.scss";

function Carrito() {
  return (
    <div id="carrito">
      <h3 className="container">Carrito</h3>
      <Tarjeta />
      <div className="container">
        <button type="button" className="btn btn-primary">
          CONFIRMAR
        </button>
      </div>
    </div>
  );
}

export default Carrito;
