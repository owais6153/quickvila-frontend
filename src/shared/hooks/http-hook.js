import { useLoading } from "./loader-hook";
import { useState, useCallback, useRef, useEffect } from "react";

import { toast } from "react-toastify";

export const useHttpClient = (displayErrors = true) => {
  const [error, setError] = useState();

  const setTheErrors = (val) => {
    if (displayErrors) {
      toast.error(`${val}`);
    }
    setError(() => {
      return val;
    });
  };
  const { isLoading, setIsLoading } = useLoading(true);

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);
      var responseData;
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        setIsLoading(false);
        responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          throw new Error(response.message);
        }

        return responseData;
      } catch (err) {
        setIsLoading(false);
        if (responseData.errors && responseData.status != 200) {
          setTheErrors(responseData.errors);
        } else {
          setTheErrors(err.message);
        }
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
