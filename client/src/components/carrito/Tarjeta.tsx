import { formatPrecio } from "../../helpers/formatPrecio";
import { useCarritoContext } from "../../context/CarritoContext";
import { useHistory } from "react-router-dom";
import "./carrito.scss";

function Tarjeta(props: { producto: any; setRecallEffect: any }) {
  const { deleteCarrito, setRealoadTotalCarrito } = useCarritoContext();
  let history = useHistory();

  const handleClickRedirect = () => {
    history.push(`/precarrito/${props.producto._id}`);
  };

  const handleClickRemove = async () => {
    await deleteCarrito(props.producto.talle, props.producto._id);
    props.setRecallEffect(true);
    setRealoadTotalCarrito(true);
  };

  return (
    <div id="tarjeta-carrito" className="container mt-3 mb-5">
      <div className="card mb-3">
        <div className="roww g-0">
          <div className="col-md-2" onClick={() => handleClickRedirect()}>
            <img
              src={props.producto.urlImg}
              className="img-fluid rounded-start"
              alt={props.producto.nombre}
            />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">
                <strong>{props.producto.nombre}</strong>{" "}
                {`(x${props.producto.cantidad})`}
              </h5>
              <p className="card-text">
                <small className="text-muted">
                  Talle <strong>{props.producto.talle}</strong> -{" "}
                  <strong>${formatPrecio(props.producto.precio)}</strong>
                </small>
              </p>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleClickRemove()}
              >
                REMOVER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tarjeta;
