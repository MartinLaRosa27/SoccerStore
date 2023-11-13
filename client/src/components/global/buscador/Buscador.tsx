import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { errorToast } from "../../../helpers/toast";
import { useProductoContext } from "../../../context/ProductoContext";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import BuscadorResultado from "./BuscadorResultado";
import "./buscador.scss";

function Buscador(props: { setShowBuscador: any; showBuscador: boolean }) {
  const { getProductoPorNombre } = useProductoContext();
  let history = useHistory();
  const [productos, setProductos] = useState<any[]>([]);
  const [buscar, setBuscar] = useState<string>("");

  useEffect(() => {
    if (buscar.length > 0) {
      callGetProductoPorNombre();
    }
  }, [buscar]);

  const callGetProductoPorNombre = async () => {
    setProductos(await getProductoPorNombre(buscar, 4));
  };

  const handleClickBuscar = (e: any) => {
    e.preventDefault();
    props.setShowBuscador(false);
    setProductos([]);
    if (productos.length > 0) {
      history.push(`/resultado/${buscar}`);
    } else {
      errorToast("No se encontraron resultados para la búsqueda.");
    }
  };

  return (
    <div id="Buscador-global">
      <Modal
        show={props.showBuscador}
        onHide={() => props.setShowBuscador(false)}
        style={{ marginTop: "75px", zIndex: "11111" }}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form
            className="contenedor-buscador w-100"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
            onSubmit={(e) => handleClickBuscar(e)}
          >
            <input
              type="text"
              className="form-control w-75"
              placeholder="Buscar producto"
              onChange={(e) => setBuscar(e.target.value)}
            />
            <button className="w-25 btn-buscador-global" type="submit">
              <AiOutlineSearch />
            </button>
          </form>

          {productos.length > 0 && (
            <>
              {productos.map((producto, i) => {
                return (
                  <BuscadorResultado
                    producto={producto}
                    setShowBuscador={props.setShowBuscador}
                    setBuscar={setBuscar}
                    setProductos={setProductos}
                    key={i}
                  />
                );
              })}
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Buscador;
