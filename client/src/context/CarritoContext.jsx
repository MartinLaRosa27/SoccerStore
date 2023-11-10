import { useState } from "react";
import { createContext, useContext } from "react";
import { print } from "graphql";
import { errorToast, successToast } from "../helpers/toast";
import gql from "graphql-tag";
import axios from "axios";
const Context = createContext();

export const CarritoContext = ({ children }) => {
  const [realoadTotalCarrito, setRealoadTotalCarrito] = useState(true);

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
  const getCarritoCount = async () => {
    let total = 0;
    const GET_CARRITO_COUNT = gql`
      query Query {
        getCarritoCount
      }
    `;
    await axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}`,
        {
          query: print(GET_CARRITO_COUNT),
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
          total = res.data.data.getCarritoCount;
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return total;
  };

  // ---------------------------------------------------------------------------
  return (
    <Context.Provider
      value={{
        postCarrito,
        getCarritoCount,
        setRealoadTotalCarrito,
        realoadTotalCarrito,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCarritoContext = () => {
  return useContext(Context);
};
