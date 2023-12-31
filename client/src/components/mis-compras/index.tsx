import { useEffect, useState } from "react";
import { useCarritoContext } from "../../context/CarritoContext";
import { Helmet } from "react-helmet";
import TarjetaMisCompras from "./TarjetaMisCompras";
import Spinner from "../global/Spinner";
import "./mis-compras.scss";

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
      <Helmet>
        <title>SoccerStore | Mis Compras</title>
      </Helmet>
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
