import { useCallback, useState, useEffect } from "react";
import { useHttpClient } from "./http-hook";
import { apiUrl } from "../helper";

export const useCart = (isLogin, token) => {
  const [identifier, setIdentifier] = useState(false);
  const [cart, setCart] = useState({});

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const getHeaders = useCallback(() => {
    if (isLogin)
      return {
        Authorization: `Bearer ${token}`,
      };
    else return {};
  }, [isLogin, identifier]);

  useEffect(() => {
    var cartidentifier = cart.identifier ? cart.identifier : false;
    if (!cartidentifier) {
      if (cartidentifier != identifier) {
        localStorage.removeItem("cart");
        setIdentifier(() => cartidentifier);
      }
    } else {
      if (cartidentifier != identifier) {
        setIdentifier(() => cartidentifier);
        localStorage.setItem(
          "cart",
          JSON.stringify({
            identifier: cartidentifier,
          })
        );
      }
    }
  }, [cart]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart && storedCart.identifier) {
      setIdentifier(() => storedCart.identifier);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = identifier ? "?identifier=" + identifier : "";
        const responseData = await sendRequest(
          apiUrl(`cart${params}`),
          "GET",
          null,
          getHeaders()
        );
        if (responseData.status === 200) {
          if (responseData.cart !== null) {
            setCart(responseData.cart);
          } else {
            localStorage.removeItem("cart");
          }
        }
      } catch (err) {}
    };
    if ((!!token || identifier) && token !== null) fetchData();
  }, [identifier, token]);

  const addToCart = useCallback(
    async (product, variation) => {
      try {
        const params = identifier ? "?identifier=" + identifier : "";
        var url = "";
        if (product.product_type == "variation") {
          url = `cart/add/${product.id}${params}${
            params !== "" ? "&" : "?"
          }variation=${variation}`;
        } else {
          url = `cart/add/${product.id}${params}`;
        }

        const responseData = await sendRequest(
          apiUrl(url),
          "PUT",
          {},
          getHeaders()
        );
        if (responseData.status === 200) {
          setCart(responseData.cart);
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
          setCart({});
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
          setCart(responseData.cart);
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
          setCart(responseData.cart);
        }
        return responseData;
      } catch (err) {}
    },
    [isLogin, identifier]
  );

  return {
    removeItem,
    updateItem,
    setCart,
    emptyCart,
    addToCart,
    identifier,
    cart,
  };
};
