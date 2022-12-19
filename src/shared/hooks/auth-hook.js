import { useState, useCallback, useEffect } from "react";

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);
  const [verified, setVerified] = useState(false);
  const [user, setUser] = useState(false);
  const login = useCallback((uid, user, token, verified, expirationDate) => {
    setToken(token);
    setUserId(uid);
    setVerified(verified);
    setUser(user);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        verified,
        userId: uid,
        user,
        token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("userData");
    setToken(null);
    setUser(false);
    setTokenExpirationDate(null);
    setUserId(null);
    setVerified(null);
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
        storedData.user,
        storedData.token,
        storedData.verified,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  return { token, login, logout, userId, user, verified };
};
