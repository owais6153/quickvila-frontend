import { useState, useCallback, useEffect, useContext } from "react";
import { AppContext } from "../context/app-context";

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);
  const [verified, setVerified] = useState(false);
  const { cart, setCart } = useContext(AppContext);

  const login = useCallback((uid, token, verified, expirationDate) => {
    setToken(token);
    setUserId(uid);
    setVerified(verified);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        verified: verified,
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setCart({});
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    setVerified(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        storedData.verified,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  return { token, login, logout, userId, verified };
};
