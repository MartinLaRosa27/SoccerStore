import Producto from "./components/producto";
import Home from "./components/home";

export const routes = [
  {
    path: "/",
    component: Home,
    isLoged: false,
  },
  {
    path: "/producto/:id",
    component: Producto,
    isLoged: false,
  },
];
