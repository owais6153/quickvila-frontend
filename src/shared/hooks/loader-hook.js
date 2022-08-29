import { useContext } from "react";
import { LoadingContext } from "../context/loader-context";

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoaderContext");
  }
  return context;
}
