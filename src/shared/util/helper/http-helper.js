const HttpReq = async (
  method = "GET",
  body = {},
  headers = {
    "Content-Type": "application/json",
  }
) => {
  var requestOptions = {
    method,
    body,
    headers,
  };

  await fetch(`${process.env.REACT_APP_API_URL}/authenticate`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return "error", error;
    });
};
