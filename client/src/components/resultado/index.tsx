import { useEffect, useState } from "react";
import { useProductoContext } from "../../context/ProductoContext";
import { useParams } from "react-router-dom";
import Spinner from "../global/Spinner";
import ProductCard from "../global/ProductCard";
import FiltrosResultado from "./FiltrosResultado";
import "./resultado.scss";

function Resultado() {
  const { getProductoPorNombre, getProductoPorCategoriaConFiltro } =
    useProductoContext();
  const { nombreProducto }: any = useParams();
  const [filtro, setFiltro] = useState<String>("Filtrar por:");
  const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setProductos([]);
    setFiltro("Filtrar por:");
    callGetProductoPorCategoria();
  }, [nombreProducto]);

  useEffect(() => {
    if (productos.length > 0) {
      if (filtro == "Menor precio") {
        callGetProductoPorCategoriaConFiltro("Menor precio");
      }
      if (filtro == "Mayor precio") {
        callGetProductoPorCategoriaConFiltro("Mayor precio");
      }
      if (filtro == "Más nuevos") {
        callGetProductoPorCategoriaConFiltro("Más nuevos");
      }
      if (filtro == "Más viejos") {
        callGetProductoPorCategoriaConFiltro("Más viejos");
      }
    }
  }, [filtro]);

  const callGetProductoPorCategoria = async () => {
    setProductos(await getProductoPorNombre(nombreProducto, 0));
  };

  const callGetProductoPorCategoriaConFiltro = async (filtro: String) => {
    setProductos(
      await getProductoPorCategoriaConFiltro(Number(nombreProducto), filtro)
    );
  };

  return (
    <div id="Resultado">
      {productos.length > 0 && (
        <>
          <FiltrosResultado
            nombreCategoria={nombreProducto}
            setFiltro={setFiltro}
            filtro={filtro}
          />
          <div className="row row-cols-2 row-cols-md-5 g-4">
            {productos.map((producto, i) => {
              return <ProductCard key={i} producto={producto} />;
            })}
          </div>
        </>
      )}
      {productos.length == 0 && <Spinner />}
    </div>
  );
}

export default Resultado;
