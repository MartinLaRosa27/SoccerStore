import { formatPrecio } from "../../helpers/formatPrecio";
import { useHistory } from "react-router-dom";
import { useFavoritoContext } from "../../context/FavoritosContext";

function TarjetaFavoritos(props: { producto: any; setRecallEffect: any }) {
  let history = useHistory();

  const { deleteFavorito, setRealoadTotalFavoritos } = useFavoritoContext();

  const handleClickRedirect = () => {
    history.push(`/precarrito/${props.producto._id}`);
  };

  const handleClickRemove = async () => {
    await deleteFavorito(props.producto._id);
    props.setRecallEffect(true);
    setRealoadTotalFavoritos(true);
  };

  return (
    <div id="TarjetaFavoritos-favoritos" className="container mt-3 mb-5">
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
                <strong>{props.producto.nombre}</strong>
              </h5>
              <p className="card-text">
                <small className="text-muted">
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

export default TarjetaFavoritos;
