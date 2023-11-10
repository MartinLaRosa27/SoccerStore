import "./carrito.scss";

function Tarjeta() {
  return (
    <div id="tarjeta-carrito" className="container mt-3 mb-5">
      <div className="card mb-3">
        <div className="roww g-0">
          <div className="col-md-2">
            <img
              src="https://argentina4you.com/cdn/shop/files/riverneg.png?v=1684429032"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">Remera River Plate</h5>
              <p className="card-text">
                <small className="text-muted">Talle S - x1</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tarjeta;
