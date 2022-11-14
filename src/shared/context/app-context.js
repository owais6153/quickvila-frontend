import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "../hooks/http-hook";
import { useAuth } from "../hooks/auth-hook";
import { apiUrl } from "../helper";
import { toast } from "react-toastify";

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
  updateCart: () => {},
  toggleLoginModal: () => {},
  searchHandler: () => {},
  hasGeoLocation: false,
  geolocation: {},
  getLocationByNavigator: () => {},
});

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const { sendRequest } = useHttpClient(false);
  const [geolocation, setGeolocation] = useState();
  const { token, login, logout, userId, user, verified } = useAuth();
  const [loginModal, setLoginModal] = useState(false);

  // Search
  const navigate = useNavigate();
  const searchHandler = (value) => {
    navigate(`/search/${value}`);
  };

  // Auth
  const toggleLoginModal = () => {
    setLoginModal(!loginModal);
  };

  // Cart
  const updateCart = (newCart) => {
    setCart(() => newCart);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(apiUrl(`cart`), "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        if (responseData.status === 200) {
          updateCart(responseData.cart);
        }
      } catch (err) {}
    };
    fetchData();
  }, [token]);

  // GeoLocation
  const getLocationByNavigator = (displayError = true) => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setGeolocation(() => ({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));
      },
      function (error) {
        if (displayError)
          toast.error(
            `${error.message}, Please reset your location permission`
          );
        else
          console.error(
            `${error.message}, Please reset your location permission`
          );
      }
    );
  };
  getLocationByNavigator(false);
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
        updateCart,
        searchHandler,
        toggleLoginModal,
        hasGeoLocation: !!geolocation,
        geolocation,
        getLocationByNavigator,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
