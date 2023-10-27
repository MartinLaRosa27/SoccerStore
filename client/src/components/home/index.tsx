import CarouselBanner from "./CarouselBanner";
import cuotas from "../../assets/img/home/cuotas.webp";
import "./home.scss";
import ProductCarousel from "../global/ProductCarousel";

function Home() {
  return (
    <div id="home">
      <CarouselBanner />
      <h1>{import.meta.env.VITE_BACKEND_URL}</h1>
      <ProductCarousel />
      <img src={cuotas} alt="Mejores ofertas" className="ofertas" />
    </div>
  );
}

export default Home;
