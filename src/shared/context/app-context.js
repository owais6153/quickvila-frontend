import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/cart-hook";
import { useAuth } from "../hooks/auth-hook";

export const AppContext = createContext({
  auth: {
    _token: "",
    login: () => {},
    logout: () => {},
  },
  isLogin: false,
  toggleLoginModal: () => {},
  loginModal : false,
  searchHandler: () => {},
  cart: {},
  addToCart: () => {},
});

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const searchHandler = (value) => {
    navigate(`/search/${value}`);
  };
  const [cart, addToCart] = useCart();
  const { token, login, logout, userId } = useAuth();

  const [loginModal, setLoginModal] = useState(false);
  const toggleLoginModal = () => {
    setLoginModal(!loginModal);
  };

  return (
    <AppContext.Provider
      value={{
        isLogin: !!token,
        toggleLoginModal,
        loginModal,
        auth: {
          _token: token,
          login,
          logout,
        },
        searchHandler,
        cart,
        addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
