import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/cart-hook";

export const AppContext = createContext({
  auth: {
    _token: "",
    _user: {},
  },
  searchHandler: () => {},
  cart: {},
});

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const searchHandler = (value) => {
    navigate(`/search/${value}`);
  };
  const [cart] = useCart();

  return (
    <AppContext.Provider
      value={{
        auth: {
          _token: "",
          _user: {},
        },
        searchHandler,
        cart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
