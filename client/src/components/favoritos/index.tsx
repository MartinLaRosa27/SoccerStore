import { useEffect, useState } from "react";
import { useFavoritoContext } from "../../context/FavoritosContext";
import TarjetaFavoritos from "./TarjetaFavoritos";
import Spinner from "../global/Spinner";
import "./favoritos.scss";

function Favoritos() {
  const [products, setProducts] = useState<any>(false);
  const [recallEffect, setRecallEffect] = useState<boolean>(true);
  const { getFavoritosProducts, setRealoadTotalFavoritos } =
    useFavoritoContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    callGetCarritoCompras();
    setRecallEffect(false);
  }, [recallEffect]);

  const callGetCarritoCompras = async () => {
    setProducts(await getFavoritosProducts());
    setRealoadTotalFavoritos(true);
  };

  return (
    <div id="Favoritos">
      <h3 className="container">Favoritos</h3>
      {products ? (
        <>
          {products.length > 0 ? (
            <>
              {products.map((product: any, i: number) => {
                return (
                  <TarjetaFavoritos
                    key={i}
                    producto={product}
                    setRecallEffect={setRecallEffect}
                  />
                );
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
