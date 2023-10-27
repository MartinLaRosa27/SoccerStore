import ProductCarousel from "../global/ProductCarousel";
import "./producto.scss";

function Producto() {
  return (
    <>
      <div id="Product">
        <div className="container-prod">
          <div className="images">
            <img src="https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9f2fbc64/products/ADHT3679/ADHT3679-1.JPG" />
          </div>
          <div className="slideshow-buttons">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
          </div>
          <p className="pick">Selecciona talle:</p>
          <div className="sizes">
            <div className="size">S</div>
            <div className="size">M</div>
            <div className="size">L</div>
            <div className="size">XL</div>
          </div>
          <div className="product">
            <p className="marca">adidas</p>
            <h1>River Plate LOCAL</h1>
            <h2 className="price">$12,00</h2>
            <p className="desc">
              The Nike Epic React Flyknit foam cushioning is responsive yet
              light-weight, durable yet soft. This creates a sensation that not
              only enhances the feeling of moving forward, but makes running
              feel fun, too.
            </p>

            <span>Disponibles: {10}</span>
            <div className="buttons mt-2">
              <button className="add">agregar</button>
              <button className="like">
                <span>♥</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProductCarousel categoria="Prductos similares" />
    </>
  );
}

export default Producto;
