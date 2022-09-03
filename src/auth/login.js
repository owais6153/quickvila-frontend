import React, { useState, useContext } from "react";
import Input from "../shared/components/form-elements/input";
import Button from "../shared/components/form-elements/button";
import Alert from "../shared/components/alert";
import { useForm } from "../shared/hooks/form-hook";
import { useHttpClient } from "../shared/hooks/http-hook";
import { AppContext } from "../shared/context/app-context";
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from "../shared/util/validation";
import { toast } from "react-toastify";
import { apiUrl } from "../shared/helper";

const LoginForm = () => {
  const { sendRequest, error, clearError } = useHttpClient();
  const { auth } = useContext(AppContext);
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

  const [isLoginMode, setLoginMode] = useState(true);
  const setModeLogin = () => {
    clearError();
    setFormData(
      {
        email: {
          value: "",
          isValid: false,
        },
        password: {
          value: "",
          isValid: false,
        },
        name: undefined,
        confirm_password: undefined
      },
      formState.inputs.email.isValid && formState.inputs.email
    );
    setLoginMode(true);
  };
  const setSignupMode = () => {
    clearError();
    setFormData(
      {
        email: {
          value: "",
          isValid: false,
        },
        password: {
          value: "",
          isValid: false,
        },
        name: {
          value: "",
          isValid: false,
        },
        confirm_password: {
          value: "",
          isValid: false,
        },
      },
      false
    );
    setLoginMode(false);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!formState.isValid) {
      return;
    }
    var url, data;
    if (isLoginMode) {
      url = apiUrl('authenticate');
      data =  JSON.stringify({
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
      })
    }
    else{      
      url = apiUrl('register');
      data =  JSON.stringify({
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
        confirm_password: formState.inputs.confirm_password.value,
        name: formState.inputs.name.value,
      })
    }
      clearError();
      var responseData;
      try {
        responseData = await sendRequest(
          url,
          "POST",
          data,
          {
            "Content-Type": "application/json",
          }
        );
        if (responseData.status === 200) {
          auth.login(responseData.userId, responseData.token);
          toast.success("Successfully Login", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } catch (err) {}
  };

  return (
    <form id="loginForm" onSubmit={submitHandler} className="row">
      <div
        className="col-md-10"
        style={{ margin: "auto", padding: "40px 0px" }}
      >
        <div className="btn-group">
          <Button
            type="button"
            onClick={setModeLogin}
            className={`btn ${isLoginMode && "btn-primary"}`}
          >
            Login
          </Button>
          <Button
            type="button"
            onClick={setSignupMode}
            className={`btn ${!isLoginMode && "btn-primary"}`}
          >
            Signup
          </Button>
        </div>
        {error && <Alert type="danger" error={error} />}
        {!isLoginMode && (
          <div className="form-group">
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE("Please enter a valid name.")]}
            />
          </div>
        )}
        <div className="form-group">
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            onInput={inputHandler}
            validators={[
              VALIDATOR_EMAIL("Please enter a valid email address."),
            ]}
          />
        </div>
        <div className="form-group">
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onInput={inputHandler}
            validators={[
              VALIDATOR_REQUIRE(
                "Please enter a valid password, at least 6 characters."
              ),
            ]}
          />
        </div>
        {!isLoginMode && (
          <div className="form-group">
            <Input
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirm Password"
              onInput={inputHandler}
              validators={[
                VALIDATOR_REQUIRE(
                  "Please enter a valid password, at least 6 characters."
                ),
              ]}
            />
          </div>
        )}
        {isLoginMode && (
          <div className="text-right" style={{ marginBottom: "30px" }}>
            <a>Forget Password?</a>
          </div>
        )}
        <div className="form-group">
          <Button
            type="submit"
            className="btn-primary w-100"
            text= {isLoginMode ? 'Login' : 'Signup'}
            disable={formState.isValid}
          />
        </div>
      </div>
    </form>
  );
};
export default LoginForm;
