import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

function FooterGlobal() {
  return (
    <footer
      className="text-center text-lg-start text-dark"
      style={{ backgroundColor: "#ECEFF1" }}
    >
      <section
        className="d-flex justify-content-between p-4 text-dark"
        style={{ backgroundColor: "#c2a4df" }}
      >
        <div className="me-5">
          Dirección General de Defensa y Protección al Consumidor, para
          consultas y/o denuncias{" "}
          <a href="#!" className="text-dark fw-bold">
            Ingrese Aquí
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Nuestros productos</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <a
                  href="#!"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Camisetas
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Shorts
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Botines
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Zapatillas
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">nuestras redes</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <a
                  href="#!"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  <AiOutlineInstagram /> Instagram
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  <FaXTwitter /> Twitter / X
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  <AiOutlineFacebook /> Facebook
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contacto</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <i className="fas fa-home mr-3"></i> Calle Falsa 123, CABA
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> soccerstore@example.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> +60 11 1111 2222
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-3 fw-bold"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2" }}
      >
        SoccerStore© 2023
      </div>
    </footer>
  );
}

export default FooterGlobal;
