import Carousel from "react-bootstrap/Carousel";
import bannerUno from "../../assets/img/banners/bannerUno.webp";
import bannerDos from "../../assets/img/banners/bannerDos.webp";
import bannerTres from "../../assets/img/banners/bannerTres.webp";

function CarouselBanner() {
  const banners = [
    {
      id: 1,
      img: bannerUno,
      title: "River Plate Away 23/24",
    },
    {
      id: 2,
      img: bannerDos,
      title: "Boca Juniors Away 23/24",
    },
    {
      id: 3,
      img: bannerTres,
      title: "Talleres Away 23/24",
    },
  ];

  return (
    <Carousel data-bs-theme="dark" id="CarouselBanner-home">
      {banners.map((banner) => {
        return (
          <Carousel.Item key={banner.id}>
            <img
              className="d-block w-100"
              src={banner.img}
              alt={banner.title}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselBanner;
