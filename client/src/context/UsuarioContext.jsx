import { createContext, useContext } from "react";
import { print } from "graphql";
import gql from "graphql-tag";
import axios from "axios";
const Context = createContext();

export const UsuarioContext = ({ children }) => {
  // ---------------------------------------------------------------------------
  const postUsuario = async (input) => {
    let token = false;
    const POST_USUARIO = gql`
      mutation PostUsuario($input: usuarioInput) {
        postUsuario(input: $input)
      }
    `;
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}`, {
        query: print(POST_USUARIO),
        variables: {
          input: {
            email: input.email,
            password: input.password,
            nombre: input.nombre,
          },
        },
      })
      .then((res) => {
        if (!res.data.errors) {
          localStorage.setItem(
            import.meta.env.VITE_TOKEN_NAME,
            res.data.data.postUsuario
          );
          token = true;
        } else {
          alert(res.data.errors[0].message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return token;
  };

  // ---------------------------------------------------------------------------
  const getUsuario = async (input) => {
    let token = false;
    const GET_USUARIO = gql`
      query Query($input: usuarioInput) {
        getUsuario(input: $input)
      }
    `;
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}`, {
        query: print(GET_USUARIO),
        variables: {
          input: {
            email: input.email,
            password: input.password,
          },
        },
      })
      .then((res) => {
        if (!res.data.errors) {
          localStorage.setItem(
            import.meta.env.VITE_TOKEN_NAME,
            res.data.data.getUsuario
          );
          token = true;
        } else {
          alert(res.data.errors[0].message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return token;
  };

  // ---------------------------------------------------------------------------
  const getUsuarioInformationToken = async (token) => {
    let usuario = {};
    const GET_USUARIO = gql`
      query GetUsuarioInformationToken {
        getUsuarioInformationToken {
          _id
          nombre
          email
          piso
          telefono
          direccion
        }
      }
    `;
    await axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}`,
        {
          query: print(GET_USUARIO),
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        if (!res.data.errors) {
          usuario = res.data.data.getUsuarioInformationToken;
          console.log(usuario);
        } else {
          alert(res.data.errors[0].message);
          window.location.href = "/";
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return usuario;
  };

  // ---------------------------------------------------------------------------
  return (
    <Context.Provider
      value={{
        postUsuario,
        getUsuario,
        getUsuarioInformationToken,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useUsuarioContext = () => {
  return useContext(Context);
};
