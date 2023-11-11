import { useEffect, useState } from "react";
import { useCarritoContext } from "../../context/CarritoContext";
import Tarjeta from "./Tarjeta";
import "./carrito.scss";
import Envio from "./Envio";

function Carrito() {
  const [metodoEnvio, setMetodoEnvio] = useState<string>("0");
  const [products, setProducts] = useState<any>(false);
  const [recallEffect, setRecallEffect] = useState<any>(true);
  const { getCarritoProducts } = useCarritoContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    callGetCarritoProducts();
    setRecallEffect(false);
  }, [recallEffect]);

  const callGetCarritoProducts = async () => {
    setProducts(await getCarritoProducts());
  };

  const handleClickConfirmarCompra = () => {
    if (metodoEnvio != "0") {
      alert("ok");
    }
  };

  return (
    <div id="carrito">
      <h3 className="container">Carrito</h3>
      {products.length > 0 ? (
        <>
          {products.map((product: any, i: number) => {
            return (
              <Tarjeta
                key={i}
                producto={product}
                setRecallEffect={setRecallEffect}
              />
            );
          })}
          <div className="container">
            <Envio metodoEnvio={metodoEnvio} setMetodoEnvio={setMetodoEnvio} />
            <button
              type="button"
              className="btn btn-primary"
              disabled={metodoEnvio == "0"}
              onClick={() => handleClickConfirmarCompra()}
            >
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
