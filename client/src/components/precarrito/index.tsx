import { useEffect, useState } from "react";
import ProductCarousel from "../global/ProductCarousel";
import { useProductoContext } from "../../context/ProductoContext";
import "./precarrito.scss";

function Precarrito() {
  const { getProductoPorgetProductoPorIdCategoria } = useProductoContext();
  const [producto, setProducto] = useState<any[]>([]);

  useEffect(() => {
    callGetProductoPorCategoria();
  }, []);

  const callGetProductoPorCategoria = async () => {
    setProducto(await getProductoPorgetProductoPorIdCategoria(1));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {producto.length > 0 && (
        <>
          <div id="Precarrito">
            <div className="container-prod">
              <div className="info">
                <div className="images">
                  <img src="https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9f2fbc64/products/ADHT3679/ADHT3679-1.JPG" />
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
                <h2 className="price">${producto[0].precio}</h2>
                <p className="desc">
                  The Nike Epic React Flyknit foam cushioning is responsive yet
                  light-weight, durable yet soft. This creates a sensation that
                  not only enhances the feeling of moving forward, but makes
                  running feel fun, too.
                </p>
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
    </>
  );
}

export default Precarrito;
