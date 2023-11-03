import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import "./buscador.scss";
import BuscadorResultado from "./BuscadorResultado";

function Buscador(props: { setShowBuscador: any; showBuscador: boolean }) {
  const [buscar, setBuscar] = useState<string>();

  return (
    <div id="Buscador-global">
      <Modal
        show={props.showBuscador}
        onHide={() => props.setShowBuscador(false)}
        style={{ marginTop: "75px", zIndex: "11111" }}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div
            className="contenedor-buscador w-100"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <input
              type="text"
              className="form-control w-75"
              placeholder="Buscar producto"
              onChange={(e) => setBuscar(e.target.value)}
            />
            <div className="w-25 btn-buscador-global">
              <AiOutlineSearch />
            </div>
          </div>

          {/* <BuscadorResultado producto={10}/> */}
          
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Buscador;
