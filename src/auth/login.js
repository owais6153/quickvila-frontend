import React, { useState, useContext} from "react";
import Input from "../shared/components/form-elements/input";
import Button from "../shared/components/form-elements/button";
import { useForm } from "../shared/hooks/form-hook";
import { useHttpClient } from "../shared/hooks/http-hook";
import {AppContext} from "../shared/context/app-context";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../shared/util/validation";

const LoginForm = () => {
  const {  sendRequest } = useHttpClient();
  const {isLogin, auth} = useContext(AppContext);
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
  const [isLoginMode, setLoginMode] = useState(true)
  const setModeLogin = () => {
    setLoginMode(true);
  }
  const setSignupMode = () => {
    setLoginMode(false);
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    if(isLoginMode){
    const responseData = await sendRequest(
      `${process.env.REACT_APP_API_URL}authenticate`,
      "POST",
      JSON.stringify({
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
      }),
      {
        "Content-Type": "application/json",
      }
    );
    if(responseData.status === 200){

    }
  }
  };

  return (
    <form id="loginForm" onSubmit={submitHandler} className="row">
      <div className="col-md-10" style={{margin: 'auto', padding: '40px 0px'}}>
        <div className="btn-group">
          <Button type="button" onClick={setModeLogin} className={`btn ${isLoginMode && 'btn-primary'}`}>Login</Button>
          <Button type="button" onClick={setSignupMode} className={`btn ${!isLoginMode && 'btn-primary'}`}>Signup</Button>
        </div>
        {!isLoginMode &&<div className="form-group">
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onInput={inputHandler}
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid name."
          />
        </div>}
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
        {!isLoginMode && <div className="form-group">
          <Input
            type="password"
            id="password"
            name="confirm_password"
            placeholder="Confirm Password"
            onInput={inputHandler}
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password, at least 6 characters."
          />
        </div>}
        
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
