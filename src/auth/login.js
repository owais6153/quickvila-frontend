import React, { useState } from "react";
import Input from "../shared/components/form-elements/input";
import Button from "../shared/components/form-elements/button";
import { useForm } from "../shared/hooks/form-hook";
import { useHttpClient } from "../shared/hooks/http-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../shared/util/validation";

const LoginForm = () => {
  const {  sendRequest } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submitHandler = async (event) => {
    event.preventDefault();

    const responseData = await sendRequest(
      `${process.env.REACT_APP_API_URL}/users/login`,
      "POST",
      JSON.stringify({
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
      }),
      {
        "Content-Type": "application/json",
      }
    );
  };

  return (
    <form id="loginForm" onSubmit={submitHandler} className="row">
      <div className="col-md-10" style={{margin: 'auto', padding: '40px 0px'}}>
        <div className="btn-group">
          <button className="btn btn-primary">Login</button>
          <button className="btn">Signup</button>
        </div>
        <div className="form-group">
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            onInput={inputHandler}
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
          />
        </div>
        <div className="form-group">
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onInput={inputHandler}
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password, at least 6 characters."
          />
        </div>
        
        <div className="text-right" style={{marginBottom: '30px'}}>
        <a>Forget Password?</a>
        </div>
        <div className="form-group">
          <Button
            type="submit"
            className="btn-primary w-100"
            text="Login"
            disable={formState.isValid}
          />
        </div>
      </div>
    </form>
  );
};
export default LoginForm;
