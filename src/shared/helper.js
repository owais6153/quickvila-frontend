const ENVIROMENT = "local";
// const ENVIROMENT = process.env.REACT_APP_MY_APP_ENVIROMENT;

export const homeUrl = (path = "") => {
  if (ENVIROMENT === "local")
    return `${process.env.REACT_APP_MY_APP_URL}${path}`;
  else return `${process.env.REACT_APP_MY_APP_URL_PRODUCTION}${path}`;
};
export const apiUrl = (path = "") => {
  if (ENVIROMENT === "local") return `${process.env.REACT_APP_API_URL}${path}`;
  else return `${process.env.REACT_APP_API_URL_PRODUCTION}${path}`;
};
export const appName = () => {
  return `${process.env.REACT_APP_MY_APP}`;
};
export const Currency = () => {
  return `${process.env.REACT_APP_MY_APP_CURRENCY}` || "$";
};
