import { createContext, useContext } from "react";
import { print } from "graphql";
import { errorToast, successToast } from "../helpers/toast";
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
          successToast("Usuario registrado correctamente");
          localStorage.setItem(
            import.meta.env.VITE_TOKEN_NAME,
            res.data.data.postUsuario
          );
          token = true;
        } else {
          errorToast(res.data.errors[0].message);
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
          errorToast(res.data.errors[0].message);
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
        } else {
          if (res.data.errors[0].message == "session expired") {
            errorToast("Por favor, inicie sesión nuevamente");
            localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME);
            window.location.href = "/";
          } else {
            errorToast(res.data.errors[0].message);
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return usuario;
  };

  // ---------------------------------------------------------------------------
  const patchUser = async (input, token) => {
    let newToken = false;
    const PATCH_USUARIO = gql`
      mutation PatchUser($input: usuarioInput) {
        patchUser(input: $input)
      }
    `;
    await axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}`,
        {
          query: print(PATCH_USUARIO),
          variables: {
            input: {
              email: input.email,
              password: input.password,
              nombre: input.nombre,
              direccion: input.direccion,
              piso: input.piso,
              telefono: input.telefono,
            },
          },
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        if (!res.data.errors) {
          localStorage.setItem(
            import.meta.env.VITE_TOKEN_NAME,
            res.data.data.patchUser
          );
          newToken = true;
        } else {
          if (res.data.errors[0].message == "session expired") {
            errorToast("Por favor, inicie sesión nuevamente");
            localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME);
            window.location.href = "/";
          } else {
            errorToast(res.data.errors[0].message);
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return newToken;
  };

  // ---------------------------------------------------------------------------
  return (
    <Context.Provider
      value={{
        postUsuario,
        getUsuario,
        getUsuarioInformationToken,
        patchUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useUsuarioContext = () => {
  return useContext(Context);
};
