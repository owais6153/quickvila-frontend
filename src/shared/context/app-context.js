import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGeoLoacation } from "../hooks/geolocation-hook";
import { useCart } from "../hooks/cart-hook";

import { useAuth } from "../hooks/auth-hook";
export const AppContext = createContext({
  auth: {
    _token: null,
    userId: null,
    user: null,
    verified: false,
    login: () => {},
    logout: () => {},
  },
  layout: true,
  setLayout: () => {},
  isLogin: false,
  loginModal: false,
  toggleLoginModal: () => {},
  searchHandler: () => {},
  updateUserInfo: () => {},
  cart: {},
  setCart: () => {},
  identifier: false,
  updateItem: () => {},
  addToCart: () => {},
  emptyCart: () => {},
  removeItem: () => {},

  hasGeoLocation: false,
  geolocation: {},
  getLocationByNavigator: () => {},
});

export const AppProvider = ({ children }) => {
  const [layout, setLayout] = useState(true);
  const [loginModal, setLoginModal] = useState(false);
  const { geolocation, setGeolocation, getLocationByNavigator } =
    useGeoLoacation();

  const { token, login, logout, userId, user, verified, updateUserInfo } =
    useAuth();

  const {
    cart,
    setCart,
    identifier,
    addToCart,
    emptyCart,
    updateItem,
    removeItem,
  } = useCart(!!token, token);

  // Search
  const navigate = useNavigate();
  const searchHandler = (value) => {
    navigate(`/search/${value}`);
  };

  // Auth
  const toggleLoginModal = () => {
    setLoginModal(!loginModal);
  };

  return (
    <AppContext.Provider
      value={{
        isLogin: !!token,
        loginModal,
        auth: {
          verified,
          userId,
          user,
          _token: token,
          login,
          logout,
        },
        updateUserInfo,
        layout,
        setLayout,
        toggleLoginModal,
        searchHandler,

        removeItem,
        updateItem,
        emptyCart,
        addToCart,
        identifier,
        cart,
        setCart,

        hasGeoLocation: !!geolocation,
        geolocation,
        getLocationByNavigator,
        setGeolocation,
      }}>
      {children}
    </AppContext.Provider>
  );
};
