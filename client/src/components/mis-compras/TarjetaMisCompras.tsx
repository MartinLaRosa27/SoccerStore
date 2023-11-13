import { formatPrecio } from "../../helpers/formatPrecio";
import { useHistory } from "react-router-dom";

function TarjetaMisCompras(props: { producto: any }) {
  let history = useHistory();

  const handleClickRedirect = () => {
    history.push(`/precarrito/${props.producto._id}`);
  };

  return (
    <div id="tarjeta-mis-compras" className="container mt-3 mb-5">
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
                  Talle{" "}
                  <strong className="talle">{props.producto.talle}</strong> -{" "}
                  <strong>${formatPrecio(props.producto.precio)}</strong> c/u
                </small>
                <small className="text-muted">
                  Estado:{" "}
                  <strong className="estado">{props.producto.estado}</strong>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TarjetaMisCompras;
