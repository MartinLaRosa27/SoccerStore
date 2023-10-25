import React, { createContext, useContext } from "react";
import { toast } from "react-hot-toast";
import { print } from "graphql";
import gql from "graphql-tag";
import axios from "axios";
const Context = createContext();

export const PruebaContext = ({ children }) => {
  // ---------------------------------------------------------------------------
  const getValues = async (token) => {
    const GET_VALUES = gql`
      query GetPrueba {
        getPrueba {
          _id
          contendio
        }
      }
    `;
    await axios
      .post(
        `http://${import.meta.env.VITE_BACKEND_URL}`,
        {
          query: print(GET_VALUES),
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        if (!res.data.errors) {
          console.log(res.data.data.getPrueba);
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
  };

  // ---------------------------------------------------------------------------
  return (
    <Context.Provider
      value={{
        getValues,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const usePruebaContext = () => {
  return useContext(Context);
};
