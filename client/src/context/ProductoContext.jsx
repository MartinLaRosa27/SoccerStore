import { createContext, useContext } from "react";
import { errorToast } from "../helpers/toast";
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
          categorias = res.data.data.getProductoPorCategoria;
        } else {
          errorToast("Error al mostrar los productos");
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
          producto = res.data.data.getProductoPorId;
        } else {
          errorToast("Error al mostrar los productos");
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return producto;
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
          errorToast("Error al mostrar los productos");
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return producto;
  };

  // ---------------------------------------------------------------------------
  const getProductoPorMarca = async (marca) => {
    let categorias = [];
    const GET_PRODUCTO_X_MARCA = gql`
      query GetProductoPorMarca($marca: Int) {
        getProductoPorMarca(marca: $marca) {
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
        query: print(GET_PRODUCTO_X_MARCA),
        variables: {
          marca,
        },
      })
      .then((res) => {
        if (!res.data.errors) {
          categorias = res.data.data.getProductoPorMarca;
        } else {
          errorToast("Error al mostrar los productos");
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
        getProductoPorId,
        getProductoPorNombre,
        getProductoPorMarca,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProductoContext = () => {
  return useContext(Context);
};
