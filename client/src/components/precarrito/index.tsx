import { useEffect, useState } from "react";
import { useProductoContext } from "../../context/ProductoContext";
import { useCarritoContext } from "../../context/CarritoContext";
import { formatPrecio } from "../../helpers/formatPrecio";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import ProductCarousel from "../global/ProductCarousel";
import Spinner from "../global/Spinner";
import "./precarrito.scss";

function Precarrito() {
  const { getProductoPorId } = useProductoContext();
  const { postCarrito } = useCarritoContext();
  const { productoId }: any = useParams();
  const [producto, setProducto] = useState<any[]>([]);
  const [talleSeleccionado, setTalleSeleccionado] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setProducto([]);
    callGetProductoPorId();
  }, [productoId]);

  const callGetProductoPorId = async () => {
    setProducto(await getProductoPorId(Number(productoId)));
  };

  const agregarCarrito = async () => {
    if (!talleSeleccionado) {
      toast.error("Por favor, seleccione un talle del producto", {
        style: {
          background: "#333",
          color: "#fff",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "80px",
        },
      });
    } else {
      await postCarrito(talleSeleccionado, productoId);
    }
  };

  return (
    <>
      {producto.length > 0 && !producto[0].error && (
        <>
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
                <p className="marca">{producto[0].marcaNombre}</p>
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
                      {/* <button className="like">
                        <span>♥</span>
                      </button> */}
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
