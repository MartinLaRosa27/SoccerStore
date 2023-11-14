import { useEffect, useState } from "react";
import { useCarritoContext } from "../../context/CarritoContext";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import Tarjeta from "./Tarjeta";
import Envio from "./Envio";
import Spinner from "../global/Spinner";
import "./carrito.scss";

function Carrito() {
  const [preferenceId, setPreferenceId] = useState<any>("");
  initMercadoPago(import.meta.env.VITE_MP_PK);
  const [metodoEnvio, setMetodoEnvio] = useState<string>("0");
  const [products, setProducts] = useState<any>(false);
  const [recallEffect, setRecallEffect] = useState<any>(true);
  const { getCarritoProducts, crearCompra } = useCarritoContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    callGetCarritoProducts();
    setRecallEffect(false);
  }, [recallEffect]);

  const callGetCarritoProducts = async () => {
    setProducts(await getCarritoProducts());
  };

  const handleClickConfirmarCompra = async () => {
    let auxArray: any[] = [];
    let pertenece: boolean = false;
    if (metodoEnvio != "0") {
      products.map((product: any) => {
        auxArray.map((aux) => {
          if (aux._id == product._id) {
            aux.cantidad += product.cantidad;
            pertenece = true;
          }
        });
        if (!pertenece) {
          auxArray.push({
            _id: product._id,
            cantidad: product.cantidad,
            nombre: product.nombre,
          });
        }
      });
      setPreferenceId(await crearCompra(auxArray));
    }
  };

  return (
    <div id="carrito">
      <h3 className="container">Carrito</h3>
      {products.length > 0 ? (
        <>
          {" "}
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
                <Envio
                  metodoEnvio={metodoEnvio}
                  setMetodoEnvio={setMetodoEnvio}
                />
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
        </>
      ) : (
        <>
          <Spinner />
        </>
      )}
      <div className="container">
        {preferenceId && <Wallet initialization={{ preferenceId }} />}
      </div>
    </div>
  );
}

export default Carrito;
