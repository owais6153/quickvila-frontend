import { useReducer, useCallback, useEffect, useContext } from "react";
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
      if (responseData.status == 200) {
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
      if (responseData.status == 200) {
        setCart({});
      }
      return responseData;
    } catch (err) {}
  }, []);

  return [cart, addToCart, emptyCart];
};
