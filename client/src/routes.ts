import Precarrito from "./components/precarrito";
import Categoria from "./components/categoria";
import Home from "./components/home";
import Resultado from "./components/resultado";
import Login from "./components/login";
import Account from "./components/account";
import Carrito from "./components/carrito";
import MisCompras from "./components/mis-compras";
import Marca from "./components/marca";

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
    path: "/marca/:marcaId",
    component: Marca,
    isLoged: false,
  },
  {
    path: "/resultado/:nombreProducto",
    component: Resultado,
    isLoged: false,
  },
  {
    path: "/account",
    component: Account,
    isLoged: true,
  },
  {
    path: "/carrito",
    component: Carrito,
    isLoged: true,
  },
  {
    path: "/mis-compras",
    component: MisCompras,
    isLoged: true,
  },
  {
    path: "/login",
    component: Login,
    isLoged: false,
  },
  {
    path: "*",
    component: Home,
    isLoged: false,
  },
];
