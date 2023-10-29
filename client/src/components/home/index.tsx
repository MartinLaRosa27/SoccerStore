import { useEffect } from "react";
import CarouselBanner from "./CarouselBanner";
import cuotas from "../../assets/img/home/cuotas.webp";
import ProductCarousel from "../global/ProductCarousel";
import "./home.scss";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="home">
      <CarouselBanner />
      <ProductCarousel categoria="camisetas" categoriaId={1} />
      <ProductCarousel categoria="shorts" categoriaId={2} />
      <img src={cuotas} alt="Mejores ofertas" className="ofertas" />
    </div>
  );
}

export default Home;
