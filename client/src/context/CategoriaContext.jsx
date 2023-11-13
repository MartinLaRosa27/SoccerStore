import { createContext, useContext } from "react";
import { errorToast } from "../helpers/toast";
import { print } from "graphql";
import gql from "graphql-tag";
import axios from "axios";
const Context = createContext();

export const CategoriaContext = ({ children }) => {
  // ---------------------------------------------------------------------------
  const getCategorias = async () => {
    let categorias = [];
    const GET_CATEGORIAS = gql`
      query GetCategorias {
        getCategorias {
          _id
          nombre
        }
      }
    `;
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}`, {
        query: print(GET_CATEGORIAS),
      })
      .then((res) => {
        if (!res.data.errors) {
          categorias = res.data.data.getCategorias;
        } else {
          errorToast("Error al mostrar las categorías");
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return categorias;
  };

  // ---------------------------------------------------------------------------
  return (
    <Context.Provider
      value={{
        getCategorias,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCategoriaContext = () => {
  return useContext(Context);
};
