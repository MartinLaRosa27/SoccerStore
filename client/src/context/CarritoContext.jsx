import { createContext, useContext } from "react";
import { print } from "graphql";
import { errorToast, successToast } from "../helpers/toast";
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
          if (res.data.errors[0].message == "session expired") {
            errorToast("Por favor, inicie sesión nuevamente");
            localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME);
            window.location.href = "/";
          } else {
            errorToast(res.data.errors[0].message);
          }
        } else {
          successToast("Producto agregado al carrito exitosamente");
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
