import { useEffect } from "react";
import { usePruebaContext } from "./context/PruebaContext";

function App() {
  const { getValues } = usePruebaContext();

  useEffect(() => {
    getValues();
  }, []);

  return (
    <>
      <h1>{import.meta.env.VITE_BACKEND_URL}</h1>
    </>
  );
}

export default App;
