import { useEffect, useState } from "react";
import { useProductoContext } from "../../context/ProductoContext";
import { useParams } from "react-router-dom";
import Spinner from "../global/Spinner";
import "./categoria.scss";
import ProductCard from "../global/ProductCard";

function Categoria() {
  const { getProductoPorCategoria } = useProductoContext();
  const { categoriaId }: any = useParams();
  const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setProductos([]);
    callGetProductoPorCategoria();
  }, [categoriaId]);

  const callGetProductoPorCategoria = async () => {
    setProductos(await getProductoPorCategoria(Number(categoriaId)));
  };

  return (
    <div id="Categoria">
      {productos.length > 0 && (
        <>
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

export default Categoria;
