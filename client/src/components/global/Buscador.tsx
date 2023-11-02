import Modal from "react-bootstrap/Modal";
import "./global.scss";

function Buscador(props: { setShowBuscador: any; showBuscador: boolean }) {
  return (
    <div id="Buscador-global">
      <Modal
        show={props.showBuscador}
        onHide={() => props.setShowBuscador(false)}
        style={{ marginTop: "100px", zIndex: "11111" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      </Modal>
    </div>
  );
}

export default Buscador;
