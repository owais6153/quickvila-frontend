import React, { useState } from "react";
import Input from "../shared/components/form/input";
import Button from "../shared/components/form/button";
import { useForm } from "../shared/hooks/form-hook";
import { useHttpClient } from "../shared/hooks/http-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../shared/util/validation";

const LoginForm = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler, setFormData] = useForm(
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
      <div className="col-md-6">
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
        <div className="form-group">
          <Button type="submit" className="btn-info" text="Login" />
        </div>
      </div>
    </form>
  );
};
export default LoginForm;
