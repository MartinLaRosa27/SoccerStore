import ProductCard from "./ProductCard";
import Carousel from "react-multi-carousel";
import "./global.scss";
import "react-multi-carousel/lib/styles.css";

function ProductCarousel(props: { categoria: String }) {
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
      <h2 className="container">{props.categoria}</h2>
      <Carousel responsive={responsive}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Carousel>
    </div>
  );
}

export default ProductCarousel;
