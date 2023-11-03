import Precarrito from "./components/precarrito";
import Categoria from "./components/categoria";
import Home from "./components/home";
import Resultado from "./components/resultado";

export const routes = [
  {
    path: "/",
    component: Home,
    isLoged: false,
  },
  {
    path: "/precarrito/:productoId",
    component: Precarrito,
    isLoged: false,
  },
  {
    path: "/categoria/:categoriaId",
    component: Categoria,
    isLoged: false,
  },
  {
    path: "/resultado/:nombreProducto",
    component: Resultado,
    isLoged: false,
  },
  {
    path: "*",
    component: Home,
    isLoged: false,
  },
];
