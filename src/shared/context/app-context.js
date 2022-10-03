import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "../hooks/http-hook";
import { useAuth } from "../hooks/auth-hook";
import { apiUrl } from "../helper";

export const AppContext = createContext({
  auth: {
    _token: null,
    userId: null,
    user: null,
    verified: false,
    login: () => {},
    logout: () => {},
  },
  isLogin: false,
  loginModal: false,
  cart: {},
  setCart: () => {},
  toggleLoginModal: () => {},
  searchHandler: () => {},
});

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const searchHandler = (value) => {
    navigate(`/search/${value}`);
  };
  const [cart, setCart] = useState({});
  const { sendRequest } = useHttpClient();
  const { token, login, logout, userId, user, verified } = useAuth();
  const [loginModal, setLoginModal] = useState(false);
  const toggleLoginModal = () => {
    setLoginModal(!loginModal);
  };

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const responseData = await sendRequest(apiUrl(`cart`), "GET", null, {
            Authorization: `Bearer ${token}`,
          });
          if (responseData.status == 200) {
            setCart(responseData.cart);
          }
        } catch (err) {}
      };
      fetchData();
    }
  }, [token]);

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
        cart,
        setCart,
        searchHandler,
        toggleLoginModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
