import { useCallback, useState, useContext, useEffect } from "react";
import { useHttpClient } from "./http-hook";
import { apiUrl } from "../helper";
import { AppContext } from "../context/app-context";

export const useCart = () => {
  const { isLogin, auth, updateCart, identifier, setIdentifier } =
    useContext(AppContext);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const getHeaders = useCallback(() => {
    if (isLogin)
      return {
        Authorization: `Bearer ${auth._token}`,
      };
    else return {};
  }, [isLogin, identifier]);

  const addToCart = useCallback(
    async (product) => {
      try {
        const params = identifier ? "?identifier=" + identifier : "";
        const responseData = await sendRequest(
          apiUrl(`cart/add/${product.id}${params}`),
          "PUT",
          {},
          getHeaders()
        );
        if (responseData.status === 200) {
          updateCart(responseData.cart);
        }
        return responseData;
      } catch (err) {}
    },
    [isLogin, identifier]
  );

  const emptyCart = useCallback(
    async (product) => {
      try {
        const params = identifier ? "?identifier=" + identifier : "";
        const responseData = await sendRequest(
          apiUrl(`cart/empty${params}`),
          "DELETE",
          {},
          getHeaders()
        );
        if (responseData.status === 200) {
          updateCart({});
        }
        return responseData;
      } catch (err) {}
    },
    [isLogin, identifier]
  );

  const updateItem = useCallback(
    async (item, operation) => {
      try {
        const params = identifier ? "?identifier=" + identifier : "";
        const responseData = await sendRequest(
          apiUrl(`cart/update/${item.id}/${operation}${params}`),
          "PUT",
          {},
          getHeaders()
        );
        if (responseData.status === 200) {
          updateCart(responseData.cart);
        }
        return responseData;
      } catch (err) {}
    },
    [isLogin, identifier]
  );

  const removeItem = useCallback(
    async (item) => {
      try {
        const params = identifier ? "?identifier=" + identifier : "";
        const responseData = await sendRequest(
          apiUrl(`cart/remove/${item.id}${params}`),
          "DELETE",
          {},
          getHeaders()
        );
        if (responseData.status === 200) {
          updateCart(responseData.cart);
        }
        return responseData;
      } catch (err) {}
    },
    [isLogin, identifier]
  );

  return {
    removeItem,
    updateItem,
    emptyCart,
    addToCart,
  };
};
