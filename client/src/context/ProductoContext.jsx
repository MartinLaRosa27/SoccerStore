import React, { createContext, useContext } from "react";
import { toast } from "react-hot-toast";
import { print } from "graphql";
import gql from "graphql-tag";
import axios from "axios";
const Context = createContext();

export const ProductoContext = ({ children }) => {
  // ---------------------------------------------------------------------------
  const getProductoPorCategoria = async (categoria, limite) => {
    let categorias = [];
    const GET_PRODUCTO_X_CATEGORIA = gql`
      query GetProductoPorCategoria($categoria: Int, $limite: Int) {
        getProductoPorCategoria(categoria: $categoria, limite: $limite) {
          _id
          nombre
          descripcion
          urlImg
          marcaNombre
          categoriaNombre
          precio
          talleS
          talleM
          talleL
          talleXL
          talle37
          talle39
          talle41
          talle43
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
          categoria,
          limite,
        },
      })
      .then((res) => {
        if (!res.data.errors) {
          if (res.data.data.getProductoPorCategoria.length > 0) {
            categorias = res.data.data.getProductoPorCategoria;
          } else {
            window.location.href = "/";
          }
        } else {
          toast.error(res.data.errors[0].message, {
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
    return categorias;
  };

  // ---------------------------------------------------------------------------
  const getProductoPorId = async (idProducto) => {
    let producto = {};
    const GET_PRODUCTO_X_ID = gql`
      query GetProductoPorId($idProducto: Int) {
        getProductoPorId(idProducto: $idProducto) {
          _id
          nombre
          descripcion
          urlImg
          precio
          categoriaNombre
          marcaNombre
          talleS
          talleM
          talleL
          talleXL
          talle37
          talle39
          talle41
          talle43
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
          if (res.data.data.getProductoPorId.length > 0) {
            producto = res.data.data.getProductoPorId;
          } else {
            window.location.href = "/";
          }
        } else {
          toast.error(res.data.errors[0].message, {
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
    return producto;
  };

  // ---------------------------------------------------------------------------
  const getProductoPorCategoriaConFiltro = async (cateogoriaId, filtro) => {
    let categorias = [];
    const GET_PRODUCTO_X_CATEGORIA = gql`
      query GetProductoPorCategoriaConFiltros(
        $categoria: Int
        $filtro: String
      ) {
        getProductoPorCategoriaConFiltros(
          categoria: $categoria
          filtro: $filtro
        ) {
          _id
          nombre
          descripcion
          urlImg
          precio
          categoriaNombre
          marcaNombre
          talleS
          talleM
          talleL
          talleXL
          talle37
          talle39
          talle41
          talle43
          marcaId
          categoriumId
          cantidad
        }
      }
    `;
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}`, {
        query: print(GET_PRODUCTO_X_CATEGORIA),
        variables: {
          categoria: cateogoriaId,
          filtro,
        },
      })
      .then((res) => {
        if (!res.data.errors) {
          if (res.data.data.getProductoPorCategoriaConFiltros.length > 0) {
            categorias = res.data.data.getProductoPorCategoriaConFiltros;
          } else {
            window.location.href = "/";
          }
        } else {
          toast.error(res.data.errors[0].message, {
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
    return categorias;
  };

  // ---------------------------------------------------------------------------
  const getProductoPorNombre = async (nombre, limite) => {
    let producto = {};
    const GET_PRODUCTO_X_NOMBRE = gql`
      query GetProductoPorNombre($nombre: String, $limite: Int) {
        getProductoPorNombre(nombre: $nombre, limite: $limite) {
          _id
          nombre
          descripcion
          urlImg
          precio
          categoriaNombre
          marcaNombre
          talleS
          talleM
          talleL
          talleXL
          talle37
          talle39
          talle41
          talle43
          marcaId
          categoriumId
          cantidad
        }
      }
    `;
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}`, {
        query: print(GET_PRODUCTO_X_NOMBRE),
        variables: {
          nombre,
          limite,
        },
      })
      .then((res) => {
        if (!res.data.errors) {
          producto = res.data.data.getProductoPorNombre;
        } else {
          toast.error(res.data.errors[0].message, {
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
    return producto;
  };

  // ---------------------------------------------------------------------------
  return (
    <Context.Provider
      value={{
        getProductoPorCategoria,
        getProductoPorCategoriaConFiltro,
        getProductoPorId,
        getProductoPorNombre,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProductoContext = () => {
  return useContext(Context);
};
