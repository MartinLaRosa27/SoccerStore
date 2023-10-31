import { NavLink } from "react-router-dom";
import { formatPrecio } from "../../helpers/formatPrecio";
import "./global.scss";

function ProductCard(props: { producto: any }) {
  return (
    <div id="ProductCard-global">
      <div className="el-wrapper">
        <div className="box-up">
          <img className="img" src={props.producto.urlImg} alt="" />
          <div className="img-info">
            <div className="info-inner">
              <span className="p-name">{props.producto.nombre}</span>
              <span className="p-company">{props.producto.marcaNombre}</span>
            </div>
            <div className="a-size">
              <strong>Talles disponibles:</strong>
              <span className="size">
                {props.producto.talleS ? "S, " : ""}
                {props.producto.talleM ? "M, " : ""}
                {props.producto.talleL ? "L, " : ""}
                {props.producto.talleXL ? "XL" : ""}
              </span>
            </div>
          </div>
        </div>
        <div className="box-down">
          <div className="h-bg">
            <div className="h-bg-inner"></div>
          </div>
          <NavLink className="cart" to={`/precarrito/${props.producto._id}`}>
            <span className="price">
              ${formatPrecio(props.producto.precio)}
            </span>
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
