import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Carousel from "react-multi-carousel";
import { useProductoContext } from "../../context/ProductoContext";
import "./global.scss";
import "react-multi-carousel/lib/styles.css";

function ProductCarousel(props: { categoria: String; categoriaId: number }) {
  const { getProductoPorCategoria } = useProductoContext();
  const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    callGetProductoPorCategoria();
  }, []);

  const callGetProductoPorCategoria = async () => {
    setProductos(await getProductoPorCategoria(props.categoriaId, 6));
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1068 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1068, min: 660 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 660, min: 0 },
      items: 2,
    },
  };

  return (
    <div id="ProductCarousel-global">
      <h3 className="container">{props.categoria}</h3>
      <Carousel responsive={responsive}>
        {productos.length > 0 &&
          productos.map((producto, i) => {
            return <ProductCard key={i} producto={producto}/>;
          })}
      </Carousel>
    </div>
  );
}

export default ProductCarousel;
