import { useCallback, useState, useContext } from "react";
import { useHttpClient } from "./http-hook";
import { apiUrl } from "../helper";
import { AppContext } from "../context/app-context";

export const useCart = () => {
  const { isLogin, auth, updateCart } = useContext(AppContext);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const getHeaders = useCallback(() => {
    if (isLogin)
      return {
        Authorization: `Bearer ${auth._token}`,
      };
    else return {};
  }, [isLogin]);

  const addToCart = useCallback(
    async (product) => {
      try {
        const responseData = await sendRequest(
          apiUrl(`cart/add/${product.id}`),
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
    [isLogin]
  );

  const emptyCart = useCallback(
    async (product) => {
      try {
        const responseData = await sendRequest(
          apiUrl(`cart/empty`),
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
    [isLogin]
  );

  const updateItem = useCallback(
    async (item, operation) => {
      try {
        const responseData = await sendRequest(
          apiUrl(`cart/update/${item.id}/${operation}`),
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
    [isLogin]
  );

  const removeItem = useCallback(
    async (item) => {
      try {
        const responseData = await sendRequest(
          apiUrl(`cart/remove/${item.id}`),
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
    [isLogin]
  );

  return { updateCart, removeItem, updateItem, emptyCart, addToCart };
};
