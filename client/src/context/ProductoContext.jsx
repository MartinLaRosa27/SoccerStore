import React, { createContext, useContext } from "react";
import { toast } from "react-hot-toast";
import { print } from "graphql";
import gql from "graphql-tag";
import axios from "axios";
const Context = createContext();

export const ProductoContext = ({ children }) => {
  // ---------------------------------------------------------------------------
  const getProductoPorCategoria = async (cateogoriaId) => {
    let categorias = [];
    const GET_PRODUCTO_X_CATEGORIA = gql`
      query GetProductoPorCategoria($categoria: Int) {
        getProductoPorCategoria(categoria: $categoria) {
          _id
          nombre
          urlImg
          marcaNombre
          categoriaNombre
          precio
          talleS
          talleM
          talleL
          talleXL
        }
      }
    `;
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}`, {
        query: print(GET_PRODUCTO_X_CATEGORIA),
        variables: {
          categoria: cateogoriaId,
        },
      })
      .then((res) => {
        if (!res.data.errors) {
          categorias = res.data.data.getProductoPorCategoria;
          console.log(categorias);
        } else {
          toast.error(res.data.errors[0].message, {
            style: {
              background: "#333",
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
            },
          });
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
        getProductoPorCategoria,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProductoContext = () => {
  return useContext(Context);
};
