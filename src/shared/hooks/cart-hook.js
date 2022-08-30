import { useReducer, useCallback, useEffect } from "react";
import { useHttpClient } from "./http-hook";
import { apiUrl } from "../helper";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return {
        products: action.products,
        count: action.count,
        total: action.total,
      };
    case "ADD_TO_CART":
      const inCart = state.products.some(
        (product) => product.id === action.product.id
      );

      const qty = (action.product.qty) ? action.product.qty : 1;
      if (inCart) {
        return {
          ...state,
          products: state.products.map((product) =>{
            let pqty = (product.qty) ? action.product.qty : 1;
            return (product.id === action.product.id
              ? {
                  ...product,
                  qty: pqty + 1,
                }
              : product)
              }),
          count: state.count + qty,
          total: state.total + qty * action.product.price,
        };
      } else {
        return {
          ...state,
          count: state.count + qty,
          total: state.total + qty * action.product.price,
          products: [...state.products, action.product],
        };
      }

    default:
      return state;
  }
};

export const useCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, {
    id: "",
    products: [],
    count: 0,
    total: 0,
  });

  const isLogin = false;
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  useEffect(() => {
    if (isLogin) {
      const fetchPlaces = async () => {
        try {
          const responseData = await sendRequest(apiUrl("products"));
          dispatch({
            products: responseData.products,
            count: responseData.products.length,
            total: 10,
            type: "SET_CART",
          });
        } catch (err) {}
      };
      fetchPlaces();
    }
  }, [sendRequest]);

  const addToCart = useCallback((product) => {
    dispatch({
      type: "ADD_TO_CART",
      product: product,
    });
  }, []);

  return [cart, addToCart];
};

// localStorage.setItem(
//   "cart",
//   JSON.stringify({
//     products: responseData.products,
//     count: responseData.products.length,
//     total: 10,
//     expiration: null,
//   })
// );

// const storedCart = JSON.parse(localStorage.getItem("cart"));
// if (storedCart.products) {
//   dispatch({
//     products: storedCart.products,
//     count: storedCart.count,
//     total: storedCart.total,
//     type: "SET_CART",
//   });
// } else {
