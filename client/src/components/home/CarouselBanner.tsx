import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../../assets/img/banners/bannerUno.webp";

function CarouselBanner() {
  const banners = [
    {
      id: 1,
      img: ExampleCarouselImage,
      title: "scsc",
    },
    {
      id: 2,
      img: ExampleCarouselImage,
      title: "scsc",
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
