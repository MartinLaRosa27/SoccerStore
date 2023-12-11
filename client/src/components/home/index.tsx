import { useEffect } from "react";
import { Helmet } from "react-helmet";
import CarouselBanner from "./CarouselBanner";
import cuotas from "../../assets/img/home/cuotas.webp";
import ProductCarousel from "../global/ProductCarousel";
import NewsletterForm from "./NewsletterForm";
import TodasMarcas from "./TodasMarcas";
import "./home.scss";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="home">
      <Helmet>
        <title>SoccerStore | Vive la pasión día a día</title>
      </Helmet>
      <CarouselBanner />
      <TodasMarcas />
      <ProductCarousel categoria="camisetas" categoriaId={1} />
      <ProductCarousel categoria="shorts" categoriaId={2} />
      <img src={cuotas} alt="Mejores ofertas" className="ofertas" />
      <NewsletterForm />
    </div>
  );
}

export default Home;
