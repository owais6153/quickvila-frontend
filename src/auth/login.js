import React, { useState } from "react";
import Input from "../shared/components/form/input";
import Button from "../shared/components/form/button";

const LoginForm = () => {
  const LoginFormSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form id="loginForm" onSubmit={LoginFormSubmitHandler} className="row">
      <div className="col-md-6">
        <div className="form-group">
          <Input type="text" id="email" name="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <Button type="submit" className="btn-info" text="Login" />
        </div>
      </div>
    </form>
  );
};
export default LoginForm;
