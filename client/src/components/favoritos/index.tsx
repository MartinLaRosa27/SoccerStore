import { useEffect, useState } from "react";
import { useCarritoContext } from "../../context/CarritoContext";
import TarjetaFavoritos from "./TarjetaFavoritos";
import Spinner from "../global/Spinner";
import "./favoritos.scss";

function Favoritos() {
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
    <div id="Favoritos">
      <h3 className="container">Mis Compras</h3>
      {products ? (
        <>
          {products.length > 0 ? (
            <>
              {products.map((product: any, i: number) => {
                return <TarjetaFavoritos key={i} producto={product} />;
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

export default Favoritos;
