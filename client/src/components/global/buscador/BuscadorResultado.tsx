import { formatPrecio } from "../../../helpers/formatPrecio";
import { useHistory } from "react-router-dom";

function BuscadorResultado(props: {
  producto: any;
  setShowBuscador: any;
  setBuscar: any;
  setProductos: any;
}) {
  let history = useHistory();

  const onClick = () => {
    props.setBuscar("");
    props.setProductos([]);
    props.setShowBuscador(false);
    history.push(`/precarrito/${props.producto._id}`);
  };

  return (
    <div id="BuscadorResultado-global" className="container">
      <div className="tarjeta" onClick={() => onClick()}>
        <img src={props.producto.urlImg} alt={props.producto.nombre} />
        <div>
          <p>
            {props.producto.nombre} | {props.producto.marcaNombre}
          </p>
          <small>${formatPrecio(props.producto.precio)}</small>
        </div>
      </div>
    </div>
  );
}

export default BuscadorResultado;
