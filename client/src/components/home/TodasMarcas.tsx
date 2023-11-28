import { useHistory } from "react-router-dom";
import adidas from "../../assets/img/home/marcas/adidas.webp";
import nike from "../../assets/img/home/marcas/nike.webp";
import ginova from "../../assets/img/home/marcas/ginova.webp";

function TodasMarcas() {
  const history = useHistory();

  const marcas = [
    {
      nombre: "nike",
      logo: nike,
      id: 2,
    },
    {
      nombre: "adidas",
      logo: adidas,
      id: 1,
    },

    {
      nombre: "ginova",
      logo: ginova,
      id: 3,
    },
  ];

  return (
    <div id="TodasMarcas-home" className="container">
      {marcas.map((marca, i) => {
        return (
          <img
            src={marca.logo}
            alt={marca.nombre}
            title={marca.nombre}
            key={i}
            onClick={() => history.push(`/marca/${marca.id}`)}
          />
        );
      })}
    </div>
  );
}

export default TodasMarcas;
