import { useEffect, useState } from "react";
import { useProductoContext } from "../../context/ProductoContext";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Spinner from "../global/Spinner";
import ProductCard from "../global/ProductCard";
import FiltrosMarca from "./FiltrosMarca";
import "./marca.scss";

function Marca() {
  const { getProductoPorMarca } = useProductoContext();
  const { marcaId }: any = useParams();
  const [filtro, setFiltro] = useState<String>("Filtrar por:");
  const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setProductos([]);
    setFiltro("Filtrar por:");
    callGetProductoPorCategoria();
  }, [marcaId]);

  useEffect(() => {
    if (productos.length > 0) {
      if (filtro == "Menor precio") {
        const aux = [...productos].sort(
          (a: any, b: any) => a.precio - b.precio
        );
        setProductos(aux);
      }
      if (filtro == "Mayor precio") {
        const aux = [...productos].sort(
          (a: any, b: any) => b.precio - a.precio
        );
        setProductos(aux);
      }
      if (filtro == "Mas nuevos") {
        const aux = [...productos].sort((a: any, b: any) => b._id - a._id);
        setProductos(aux);
      }
      if (filtro == "Mas viejos") {
        const aux = [...productos].sort((a: any, b: any) => a._id - b._id);
        setProductos(aux);
      }
    }
  }, [filtro]);

  const callGetProductoPorCategoria = async () => {
    setProductos(await getProductoPorMarca(Number(marcaId)));
  };

  return (
    <div id="Marca">
      {productos.length > 0 && (
        <>
          <Helmet>
            <title>
              SoccerStore |{" "}
              {productos[0].marcaNombre &&
                productos[0].marcaNombre.charAt(0).toUpperCase() +
                  productos[0].marcaNombre.slice(1)}
            </title>
          </Helmet>
          <FiltrosMarca
            nombreCategoria={productos[0].marcaNombre}
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

export default Marca;
