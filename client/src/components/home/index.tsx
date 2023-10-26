import CarouselBanner from "./CarouselBanner";
import "./home.scss"

function Home() {
  return (
    <>
      <CarouselBanner />
      <h1>{import.meta.env.VITE_BACKEND_URL}</h1>
    </>
  );
}

export default Home;
