import React, { useState } from "react";
import LoginForm from "./login-form";
import ForgetForm from "./forget-form";
const Auth = () => {
  const [isForget, setForget] = useState(false);
  const swithHandler = (e) => {
    e.preventDefault();
    setForget(!isForget);
  };
  return (
    <React.Fragment>
      {!isForget ? (
        <LoginForm swithHandler={swithHandler} />
      ) : (
        <ForgetForm swithHandler={swithHandler} />
      )}
    </React.Fragment>
  );
};
export default Auth;
