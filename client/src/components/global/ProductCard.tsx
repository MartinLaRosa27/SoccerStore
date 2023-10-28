import { NavLink } from "react-router-dom";
import "./global.scss";

function ProductCard() {
  return (
    <div id="ProductCard-global">
      <div className="el-wrapper">
        <div className="box-up">
          <img
            className="img"
            src="https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9f2fbc64/products/ADHT3679/ADHT3679-1.JPG"
            alt=""
          />
          <div className="img-info">
            <div className="info-inner">
              <span className="p-name">River Plate LOCAL</span>
              <span className="p-company">Adidas</span>
            </div>
            <div className="a-size">
              <strong>Talles disponibles:</strong>
              <span className="size">S , M , L , XL</span>
            </div>
          </div>
        </div>
        <div className="box-down">
          <div className="h-bg">
            <div className="h-bg-inner"></div>
          </div>
          <NavLink className="cart" to={`/precarrito/${10}`}>
            <span className="price">$12,00</span>
            <span className="add-to-cart">
              <span className="txt">Ver producto</span>
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
