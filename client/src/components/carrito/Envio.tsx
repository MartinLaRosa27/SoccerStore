function Envio(props: { metodoEnvio: string; setMetodoEnvio: any }) {
  return (
    <div id="envio-carrito">
      <h6>Método de envío:</h6>
      <select
        className="form-select"
        aria-label="Default select example"
        value={props.metodoEnvio}
        onChange={(e) => props.setMetodoEnvio(e.target.value)}
      >
        <option value="0" disabled>
          Seleccione método de envío
        </option>
        <option value="1">retiro en local</option>
      </select>
    </div>
  );
}

export default Envio;
