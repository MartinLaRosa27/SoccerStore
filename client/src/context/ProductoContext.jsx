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
          categoriumId
          marcaId
          cantidad
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
  const getProductoPorgetProductoPorIdCategoria = async (idProducto) => {
    let producto = {};
    const GET_PRODUCTO_X_ID = gql`
      query GetProductoPorId($idProducto: Int) {
        getProductoPorId(idProducto: $idProducto) {
          _id
          nombre
          urlImg
          precio
          categoriaNombre
          marcaNombre
          talleS
          talleM
          talleL
          talleXL
          categoriumId
          marcaId
          cantidad
        }
      }
    `;
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}`, {
        query: print(GET_PRODUCTO_X_ID),
        variables: {
          idProducto: idProducto,
        },
      })
      .then((res) => {
        if (!res.data.errors) {
          producto = res.data.data.getProductoPorId;
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
    return producto;
  };

  // ---------------------------------------------------------------------------
  return (
    <Context.Provider
      value={{
        getProductoPorCategoria,
        getProductoPorgetProductoPorIdCategoria,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProductoContext = () => {
  return useContext(Context);
};
