import { useEffect, useState } from "react";
import { useCarritoContext } from "../../context/CarritoContext";
import Tarjeta from "./Tarjeta";
import "./carrito.scss";

function Carrito() {
  const [products, setProducts] = useState<any>(false);
  const { getCarritoProducts } = useCarritoContext();

  useEffect(() => {
    callGetCarritoProducts();
  }, []);

  const callGetCarritoProducts = async () => {
    setProducts(await getCarritoProducts());
  };

  return (
    <div id="carrito">
      <h3 className="container">Carrito</h3>
      {products.length > 0 ? (
        <>
          {products.map((product: any, i: number) => {
            return <Tarjeta key={i} producto={product} />;
          })}
          <div className="container">
            <button type="button" className="btn btn-primary">
              CONFIRMAR
            </button>
          </div>
        </>
      ) : (
        <h2 className="carrito-vacio-msg">El carrito esta vacio</h2>
      )}
    </div>
  );
}

export default Carrito;
