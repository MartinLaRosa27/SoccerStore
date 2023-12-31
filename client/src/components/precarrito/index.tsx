import { useEffect, useState } from "react";
import { useProductoContext } from "../../context/ProductoContext";
import { useCarritoContext } from "../../context/CarritoContext";
import { formatPrecio } from "../../helpers/formatPrecio";
import { useParams } from "react-router-dom";
import { errorToast } from "../../helpers/toast";
import { useHistory } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useFavoritoContext } from "../../context/FavoritosContext";
import { Helmet } from "react-helmet";
import ProductCarousel from "../global/ProductCarousel";
import Spinner from "../global/Spinner";
import "./precarrito.scss";

function Precarrito() {
  const history = useHistory();
  const { getProductoPorId } = useProductoContext();
  const { postFavorito, setRealoadTotalFavoritos } = useFavoritoContext();
  const { postCarrito, setRealoadTotalCarrito } = useCarritoContext();
  const { productoId }: any = useParams();
  const [producto, setProducto] = useState<any[]>([]);
  const [talleSeleccionado, setTalleSeleccionado] = useState<string>("");

  const isLoged = () => {
    return localStorage.getItem(import.meta.env.VITE_TOKEN_NAME);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setTalleSeleccionado("");
    setProducto([]);
    callGetProductoPorId();
  }, [productoId]);

  const callGetProductoPorId = async () => {
    setProducto(await getProductoPorId(Number(productoId)));
  };

  const agregarCarrito = async () => {
    if (isLoged()) {
      if (!talleSeleccionado) {
        errorToast("Por favor, seleccione un talle del producto");
      } else {
        await postCarrito(talleSeleccionado, productoId);
        setRealoadTotalCarrito(true);
      }
    } else {
      history.push("/login");
    }
  };

  const agregarFavorito = async () => {
    if (isLoged()) {
      await postFavorito(productoId);
      setRealoadTotalFavoritos(true);
    } else {
      history.push("/login");
    }
  };

  return (
    <>
      {producto.length > 0 && !producto[0].error && (
        <>
          <Helmet>
            <title>
              SoccerStore |{" "}
              {producto[0].nombre &&
                producto[0].nombre.charAt(0).toUpperCase() +
                  producto[0].nombre.slice(1)}
            </title>
          </Helmet>
          <div id="Precarrito">
            <div className="container-prod">
              <div className="info">
                <div className="images">
                  <img src={producto[0].urlImg} />
                </div>

                {producto[0].cantidad > 0 && (
                  <p className="pick">Selecciona talle:</p>
                )}

                {producto[0].categoriumId != 3 ? (
                  <div className="sizes">
                    {producto[0].talleS ? (
                      <div
                        className={
                          talleSeleccionado == "s" ? "size" : "size-selected"
                        }
                        onClick={() => setTalleSeleccionado("s")}
                      >
                        S
                      </div>
                    ) : (
                      ""
                    )}
                    {producto[0].talleM ? (
                      <div
                        className={
                          talleSeleccionado == "m" ? "size" : "size-selected"
                        }
                        onClick={() => setTalleSeleccionado("m")}
                      >
                        M
                      </div>
                    ) : (
                      ""
                    )}
                    {producto[0].talleL ? (
                      <div
                        className={
                          talleSeleccionado == "l" ? "size" : "size-selected"
                        }
                        onClick={() => setTalleSeleccionado("l")}
                      >
                        L
                      </div>
                    ) : (
                      ""
                    )}
                    {producto[0].talleXL ? (
                      <div
                        className={
                          talleSeleccionado == "xl" ? "size" : "size-selected"
                        }
                        onClick={() => setTalleSeleccionado("xl")}
                      >
                        XL
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  <div className="sizes">
                    {producto[0].talle37 ? (
                      <div
                        className={
                          talleSeleccionado == "37" ? "size" : "size-selected"
                        }
                        onClick={() => setTalleSeleccionado("37")}
                      >
                        37
                      </div>
                    ) : (
                      ""
                    )}
                    {producto[0].talle39 ? (
                      <div
                        className={
                          talleSeleccionado == "39" ? "size" : "size-selected"
                        }
                        onClick={() => setTalleSeleccionado("39")}
                      >
                        39
                      </div>
                    ) : (
                      ""
                    )}
                    {producto[0].talle41 ? (
                      <div
                        className={
                          talleSeleccionado == "41" ? "size" : "size-selected"
                        }
                        onClick={() => setTalleSeleccionado("41")}
                      >
                        41
                      </div>
                    ) : (
                      ""
                    )}
                    {producto[0].talle43 ? (
                      <div
                        className={
                          talleSeleccionado == "43" ? "size" : "size-selected"
                        }
                        onClick={() => setTalleSeleccionado("43")}
                      >
                        43
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </div>

              <div className="product">
                <p
                  className="marca"
                  onClick={() => history.push(`/marca/${producto[0].marcaId}`)}
                >
                  {producto[0].marcaNombre}
                </p>
                <h1>{producto[0].nombre}</h1>
                <h2 className="price">${formatPrecio(producto[0].precio)}</h2>
                <p className="desc">{producto[0].descripcion}</p>

                {producto[0].cantidad > 0 ? (
                  <>
                    {" "}
                    <span>
                      Disponibles: <strong>{producto[0].cantidad}</strong>
                    </span>
                    <div className="buttons mt-2">
                      <button className="add" onClick={() => agregarCarrito()}>
                        agregar
                      </button>
                      <button
                        className="like"
                        onClick={() => agregarFavorito()}
                      >
                        <span>
                          <FaHeart />
                        </span>
                      </button>
                    </div>
                  </>
                ) : (
                  <h3 className="pick text-danger fw-bold">Sin stock</h3>
                )}
              </div>
            </div>
          </div>

          <ProductCarousel
            categoria="Prductos similares"
            categoriaId={producto[0].categoriumId}
          />
        </>
      )}
      {producto.length == 0 && <Spinner />}
    </>
  );
}

export default Precarrito;
