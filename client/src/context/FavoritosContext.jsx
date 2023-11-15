import { useState } from "react";
import { createContext, useContext } from "react";
import { print } from "graphql";
import { errorToast, successToast } from "../helpers/toast";
import gql from "graphql-tag";
import axios from "axios";

const Context = createContext();

export const FavoritoContext = ({ children }) => {
  const [realoadTotalFavoritos, setRealoadTotalFavoritos] = useState(true);

  // ---------------------------------------------------------------------------
  const postFavorito = async (productoId) => {
    const POST_FAVORITO = gql`
      mutation PostFavorito($productoId: Int) {
        postFavorito(productoId: $productoId) {
          _id
          nombre
          precio
          urlImg
        }
      }
    `;
    await axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}`,
        {
          query: print(POST_FAVORITO),
          variables: {
            productoId: Number(productoId),
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
          successToast("Producto agregado a favoritos exitosamente");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // ---------------------------------------------------------------------------
  const getFavoritoCount = async () => {
    let total = 0;
    const GET_FAVORITO_COUNT = gql`
      query Query {
        getFavoritoCount
      }
    `;
    await axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}`,
        {
          query: print(GET_FAVORITO_COUNT),
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
          total = res.data.data.getFavoritoCount;
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return total;
  };

  // ---------------------------------------------------------------------------
  const getFavoritosProducts = async () => {
    let productos = [];
    const GET_FAVORITOS_PRODUCTS = gql`
      query GetFavoritosProducts {
        getFavoritosProducts {
          _id
          cantidad
          talle
          precio
          nombre
          urlImg
        }
      }
    `;
    await axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}`,
        {
          query: print(GET_FAVORITOS_PRODUCTS),
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
          productos = res.data.data.getFavoritosProducts;
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return productos;
  };

  // ---------------------------------------------------------------------------
  return (
    <Context.Provider
      value={{
        postFavorito,
        getFavoritoCount,
        getFavoritosProducts,
        setRealoadTotalFavoritos,
        realoadTotalFavoritos,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useFavoritoContext = () => {
  return useContext(Context);
};
