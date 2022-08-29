import { useReducer, useCallback, useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState();
  const addToCart = useCallback(() => {
    setCart([
      {
        name: "Owais",
      },
    ]);
  }, []);

  return [cart, addToCart, setCart];
};
