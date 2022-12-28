import { createContext, useState } from "react";

export const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
});

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const value = { isLoading, setIsLoading };
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}
