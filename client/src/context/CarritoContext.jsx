import { createContext, useContext } from "react";
import { print } from "graphql";
import { toast } from "react-hot-toast";
import gql from "graphql-tag";
import axios from "axios";
const Context = createContext();

export const CarritoContext = ({ children }) => {
  // ---------------------------------------------------------------------------
  const postCarrito = async (talle, productoId) => {
    const POST_CARRITO = gql`
      mutation PostCarrito($input: carritoInput) {
        postCarrito(input: $input) {
          _id
          cantidad
          talle
        }
      }
    `;
    await axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}`,
        {
          query: print(POST_CARRITO),
          variables: {
            input: {
              cantidad: 1,
              talle,
              productoId: Number(productoId),
            },
          },
        },
        {
          headers: {
            Authorization: localStorage.getItem(
              import.meta.env.VITE_TOKEN_NAME
            ),
          },
        }
      )
      .then((res) => {
        if (res.data.errors) {
          alert("Por favor, inicie sesión nuevamente");
          localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME);
          window.location.href = "/";
        } else {
          toast.success("Producto agregado al carrito exitosamente", {
            style: {
              background: "#333",
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "80px",
            },
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // ---------------------------------------------------------------------------
  return (
    <Context.Provider
      value={{
        postCarrito,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCarritoContext = () => {
  return useContext(Context);
};
