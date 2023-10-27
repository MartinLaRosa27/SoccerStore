import { useEffect } from "react";
import { usePruebaContext } from "./context/PruebaContext";
import Home from "./components/home";
import NavbarGlobal from "./components/global/NavbarGlobal";
import FooterGlobal from "./components/global/FooterGlobal";

function App() {
  const { getValues } = usePruebaContext();

  useEffect(() => {
    getValues();
  }, []);

  return (
    <>
      <h1>{import.meta.env.VITE_BACKEND_URL}</h1>
      <NavbarGlobal />
      <Home />
      <FooterGlobal />
    </>
  );
}

export default App;
