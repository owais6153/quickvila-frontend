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
  layout: true,
  setLayout: () => {},
  isLogin: false,
  loginModal: false,
  cart: {},
  identifier: false,
  setIdentifier: () => {},
  updateCart: () => {},
  toggleLoginModal: () => {},
  searchHandler: () => {},
  hasGeoLocation: false,
  geolocation: {},
  getLocationByNavigator: () => {},
});

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [layout, setLayout] = useState(true);
  const { sendRequest } = useHttpClient(false);
  const [geolocation, setGeolocation] = useState();
  const { token, login, logout, userId, user, verified } = useAuth();
  const [loginModal, setLoginModal] = useState(false);
  const [identifier, setIdentifier] = useState(false);

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
          {
            Authorization: `Bearer ${token}`,
          }
        );
        if (responseData.status === 200) {
          updateCart(responseData.cart);
        }
      } catch (err) {}
    };
    if (!!token || identifier) fetchData();
  }, [identifier, token]);

  function getAddress(results) {
    let res = "";
    if (results && results.length) {
      res = results[0].formatted_address;
      for (var i = 0; i < results.length; i++) {
        if (results[i].types.indexOf("neighborhood") != -1) {
          res = results[i].formatted_address;
        }
      }
    }
    return res;
  }

  // GeoLocation
  const getLocationByNavigator = (
    displayError = true,
    forcedBrowserLocation = false
  ) => {
    if (!geolocation || forcedBrowserLocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const fetchAddress = async function (position) {
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${process.env.REACT_APP_GOOGLE_API}`
            );
            const address = await response.json();
            setGeolocation(() => ({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              address: getAddress(address.results),
            }));
          };
          fetchAddress(position);
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
    }
  };

  useEffect(() => {
    var hasLocation = geolocation ? true : false;
    if (hasLocation) {
      localStorage.setItem("geolocation", JSON.stringify(geolocation));
    }
  }, [geolocation]);

  useEffect(() => {
    const storedLocation = JSON.parse(localStorage.getItem("geolocation"));
    if (
      storedLocation &&
      storedLocation.latitude &&
      storedLocation.longitude &&
      storedLocation.address
    ) {
      setGeolocation({
        latitude: storedLocation.latitude,
        longitude: storedLocation.longitude,
        address: storedLocation.address,
      });
    } else {
      getLocationByNavigator(false);
    }
  }, []);

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
        layout,
        setLayout,
        identifier,
        setIdentifier,
        cart,
        updateCart,
        searchHandler,
        toggleLoginModal,
        hasGeoLocation: !!geolocation,
        geolocation,
        getLocationByNavigator,
        setGeolocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
