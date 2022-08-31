export const homeUrl = (path = "") => {
  return `${process.env.REACT_APP_MY_APP_URL}${path}`;
};
export const apiUrl = (path = "") => {
  return `${process.env.REACT_APP_API_URL}${path}`;
};
export const appName = () => {
  return `${process.env.REACT_APP_MY_APP}`;
};
export const Currency = () => {
  return <span>$</span>;
};
