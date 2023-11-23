import { useState } from "react";
import { successToast, errorToast } from "../../helpers/toast";

function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleClick = () => {
    if (email.length <= 0) {
      errorToast("Error al suscribirte a nuestra newsletter");
    } else {
      successToast("Se ha suscrito a nuestro newsletter");
      setEmail("");
    }
  };

  return (
    <div id="NewsletterForm-home" className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="single">
            <h2>
              Suscríbete a nuestro <strong>newsletter</strong>
            </h2>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Introduce tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="input-group-btn">
                <button
                  className="btn btn-theme"
                  type="submit"
                  onClick={() => handleClick()}
                >
                  suscribirse
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterForm;
