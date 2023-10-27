import CarouselBanner from "./CarouselBanner";
import cuotas from "../../assets/img/home/cuotas.webp";
import "./home.scss";
import ProductCarousel from "../global/ProductCarousel";

function Home() {
  return (
    <div id="home">
      <CarouselBanner />
      <ProductCarousel categoria="camisetas"/>
      <ProductCarousel categoria="shorts" />
      <img src={cuotas} alt="Mejores ofertas" className="ofertas" />
    </div>
  );
}

export default Home;
