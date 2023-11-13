import { useEffect, useState } from "react";
import { useCarritoContext } from "../../context/CarritoContext";
import TarjetaMisCompras from "./TarjetaMisCompras";
import "./mis-compras.scss";
import Spinner from "../global/Spinner";

function MisCompras() {
  const [products, setProducts] = useState<any>(false);
  const { getCarritoCompras } = useCarritoContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    callGetCarritoCompras();
  }, []);

  const callGetCarritoCompras = async () => {
    setProducts(await getCarritoCompras());
  };

  return (
    <div id="carrito">
      <h3 className="container">Mis Compras</h3>
      {products ? (
        <>
          {products.length > 0 ? (
            <>
              {products.map((product: any, i: number) => {
                return <TarjetaMisCompras key={i} producto={product} />;
              })}
            </>
          ) : (
            <h2 className="carrito-vacio-msg">
              No se encontraron compras registradas
            </h2>
          )}
        </>
      ) : (
        <>
          <Spinner />
        </>
      )}
    </div>
  );
}

export default MisCompras;
