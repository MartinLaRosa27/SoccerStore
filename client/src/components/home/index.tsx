import CarouselBanner from "./CarouselBanner";
import cuotas from "../../assets/img/home/cuotas.webp";
import "./home.scss";

function Home() {
  return (
    <div id="home">
      <CarouselBanner />
      <h1>{import.meta.env.VITE_BACKEND_URL}</h1>
      <img src={cuotas} alt="Mejores ofertas" className="ofertas" />
    </div>
  );
}

export default Home;
