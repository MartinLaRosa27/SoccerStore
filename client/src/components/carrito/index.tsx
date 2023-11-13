import { useEffect, useState } from "react";
import { useCarritoContext } from "../../context/CarritoContext";
import Tarjeta from "./Tarjeta";
import "./carrito.scss";
import Envio from "./Envio";

function Carrito() {
  const [metodoEnvio, setMetodoEnvio] = useState<string>("0");
  const [products, setProducts] = useState<any>(false);
  const [recallEffect, setRecallEffect] = useState<any>(true);
  const { getCarritoProducts, crearCompra, setRealoadTotalCarrito } =
    useCarritoContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    callGetCarritoProducts();
    setRecallEffect(false);
  }, [recallEffect]);

  const callGetCarritoProducts = async () => {
    setProducts(await getCarritoProducts());
  };

  const handleClickConfirmarCompra = async () => {
    if (
      window.confirm(
        'Este sitio web tiene fines educativos, por lo que las compras no son reales.\n¿Está seguro que desea continuar con la "compra"?'
      )
    ) {
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
        await crearCompra(auxArray);
        setRealoadTotalCarrito(true);
        setRecallEffect(true);
      }
    }
  };

  return (
    <div id="carrito">
      <h3 className="container">Carrito</h3>
      {products && products.length > 0 ? (
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
