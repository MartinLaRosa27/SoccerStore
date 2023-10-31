import { useEffect, useState } from "react";
import { useProductoContext } from "../../context/ProductoContext";
import { formatPrecio } from "../../helpers/formatPrecio";
import { useParams } from "react-router-dom";
import Spinner from "../global/Spinner";
import "./categoria.scss";

function Categoria() {
  const { getProductoPorCategoria } = useProductoContext();
  const { categoriaId }: any = useParams();
  const [producto, setProducto] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setProducto([]);
    callGetProductoPorCategoria();
  }, [categoriaId]);

  const callGetProductoPorCategoria = async () => {
    setProducto(await getProductoPorCategoria(Number(categoriaId)));
  };

  return (
    <>
      {producto.length > 0 && (
        <>
          <div id="Categoria">
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
        </>
      )}
      {producto.length == 0 && <Spinner />}
    </>
  );
}

export default Categoria;
