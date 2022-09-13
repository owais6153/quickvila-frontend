import {  useCallback, useContext } from "react";
import { useHttpClient } from "./http-hook";
import { apiUrl } from "../helper";
import { AppContext } from "../context/app-context";

export const useCart = () => {
  const { cart, setCart, isLogin, auth } = useContext(AppContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const addToCart = useCallback(async (product) => {
    try {
      const responseData = await sendRequest(
        apiUrl(`cart/add/${product.id}`),
        "PUT",
        {},
        {
          Authorization: `Bearer ${auth._token}`,
        }
      );
      if (responseData.status === 200) {
        setCart(responseData.cart);
      }
      return responseData;
    } catch (err) {}
  }, []);

  const emptyCart = useCallback(async (product) => {
    try {
      const responseData = await sendRequest(
        apiUrl(`cart/empty`),
        "DELETE",
        {},
        {
          Authorization: `Bearer ${auth._token}`,
        }
      );
      if (responseData.status === 200) {
        setCart({});
      }
      return responseData;
    } catch (err) {}
  }, []);

  const updateItem = useCallback(async (item, operation) => {
    try {
      const responseData = await sendRequest(
        apiUrl(`cart/update/${item.id}/${operation}`),
        "PUT",
        {},
        {
          Authorization: `Bearer ${auth._token}`,
        }
      );
      if (responseData.status === 200) {
        setCart(responseData.cart);
      }
      return responseData;
    } catch (err) {}
  }, []);

  const removeItem = useCallback(async (item) => {
    try {
      const responseData = await sendRequest(
        apiUrl(`cart/remove/${item.id}`),
        "DELETE",
        {},
        {
          Authorization: `Bearer ${auth._token}`,
        }
      );
      if (responseData.status === 200) {
        setCart(responseData.cart);
      }
      return responseData;
    } catch (err) {}
  }, []);

  return [cart, addToCart, emptyCart, updateItem, removeItem];
};
