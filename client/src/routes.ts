import Precarrito from "./components/precarrito";
import Home from "./components/home";

export const routes = [
  {
    path: "/",
    component: Home,
    isLoged: false,
  },
  {
    path: "/precarrito/:id",
    component: Precarrito,
    isLoged: false,
  },
  {
    path: "*",
    component: Home,
    isLoged: false,
  },
];
