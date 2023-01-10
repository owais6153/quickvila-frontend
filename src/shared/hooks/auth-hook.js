import { useState, useCallback, useEffect } from "react";
import { useHttpClient } from "./http-hook";
import { apiUrl } from "../helper";

export const useAuth = () => {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);
  const [verified, setVerified] = useState(false);
  const [user, setUser] = useState(false);
  const { sendRequest } = useHttpClient(false);

  const login = useCallback((uid, user, token, verified) => {
    setToken(token);
    setUserId(uid);
    setVerified(verified);
    setUser(user);

    sessionStorage.setItem(
      "userData",
      JSON.stringify({
        verified,
        userId: uid,
        user,
      })
    );
    localStorage.setItem("token", JSON.stringify({ token }));
  }, []);

  const updateUserInfo = useCallback((userdata) => {
    setUser(userdata);
    const sessionData = JSON.parse(sessionStorage.getItem("userData"));
    sessionData.user = userdata;
    sessionStorage.setItem("userData", JSON.stringify(sessionData));
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("userData");
    setToken(null);
    setUser(false);
    setUserId(null);
    setVerified(null);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = JSON.parse(localStorage.getItem("token"));
        var url = `me`;
        const responseData = await sendRequest(
          apiUrl(url),
          "GET",
          null,
          {
            Authorization: `Bearer ${storedData.token}`,
          },
          false
        );
        if (responseData && responseData.status == 200) {
          login(
            responseData.me.id,
            responseData.me,
            storedData.token,
            responseData.verified
          );
        } else {
          logout();
        }
      } catch (err) {
        logout();
      }
    };
    fetchData();
  }, []);

  return { token, login, logout, userId, user, verified, updateUserInfo };
};
