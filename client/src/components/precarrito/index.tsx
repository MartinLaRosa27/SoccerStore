import { useEffect, useState } from "react";
import { useProductoContext } from "../../context/ProductoContext";
import { formatPrecio } from "../../helpers/formatPrecio";
import { useParams } from "react-router-dom";
import ProductCarousel from "../global/ProductCarousel";
import "./precarrito.scss";
import Spinner from "../global/Spinner";

function Precarrito() {
  const { getProductoPorId } = useProductoContext();
  const { productoId }: any = useParams();
  const [producto, setProducto] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setProducto([]);
    callGetProductoPorId();
  }, [productoId]);

  const callGetProductoPorId = async () => {
    setProducto(await getProductoPorId(Number(productoId)));
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
                <p className="pick">Selecciona talle:</p>
                <div className="sizes">
                  {producto[0].talleS ? <div className="size">S</div> : ""}
                  {producto[0].talleM ? <div className="size">M</div> : ""}
                  {producto[0].talleL ? <div className="size">L</div> : ""}
                  {producto[0].talleXL ? <div className="size">XL</div> : ""}
                </div>
              </div>

              <div className="product">
                <p className="marca">{producto[0].marcaNombre}</p>
                <h1>{producto[0].nombre}</h1>
                <h2 className="price">${formatPrecio(producto[0].precio)}</h2>
                <p className="desc">{producto[0].descripcion}</p>
                <span>
                  Disponibles: <strong>{producto[0].cantidad}</strong>
                </span>
                <div className="buttons mt-2">
                  <button className="add">agregar</button>
                  <button className="like">
                    <span>♥</span>
                  </button>
                </div>
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
