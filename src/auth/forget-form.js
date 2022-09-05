import Input from "../shared/components/form-elements/input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_PASSWORD,
  VALIDATOR_CONFIRM_PASSWORD,
} from "../shared/util/validation";
import { useForm } from "../shared/hooks/form-hook";
import Button from "../shared/components/form-elements/button";
import { useHttpClient } from "../shared/hooks/http-hook";
import { useState } from "react";
import { toast } from "react-toastify";
import { apiUrl } from "../shared/helper";
import Alert from "../shared/components/alert";

const ForgetForm = ({ swithHandler }) => {
  const [step, setStep] = useState(1);
  const [token, setToken] = useState(false);
  const { sendRequest, error, clearError } = useHttpClient();
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  function changeStep() {
    if (step === 1) {
      setStep(2);
      setFormData(
        {
          email: {
            value: formState.email.value,
            isValid: formState.email.isValid,
          },
          code: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    } else if (step == 2) {
      setStep(3);
      setFormData(
        {
          code: undefined,
          email: {
            value: formState.email.value,
            isValid: formState.email.isValid,
          },
          password: {
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
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!formState.isValid) {
      return;
    }
    clearError();
    var url, data, headers;
    if (step == 1) {
      url = apiUrl("forget");
      data = JSON.stringify({
        email: formState.inputs.email.value,
      });
      headers = {
        "Content-Type": "application/json",
      };
    } else if (step == 2) {
      url = apiUrl("forget/code-verify");
      data = JSON.stringify({
        email: formState.inputs.email.value,
        code: formState.inputs.code.value,
      });
      headers = {
        "Content-Type": "application/json",
      };
    } else if (step == 3) {
      url = apiUrl("forget/update-pwd");
      data = JSON.stringify({
        email: formState.inputs.email.value,
        new_password: formState.inputs.password.value,
        confirm_password: formState.inputs.confirm_password.value,
      });
      headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    var responseData;
    try {
      responseData = await sendRequest(url, "POST", data, headers);
      if (responseData.status === 200) {
        if (step == 1) {
          toast.success("Code sent to your email");
          changeStep();
        } else if (step == 2) {
          toast.success("Code Verified");
          setToken(responseData.token);
          changeStep();
        } else if (step == 3) {
          toast.success("Password Updated");
          swithHandler(e);
        }
      }
    } catch (err) {}
  };

  return (
    <form id="loginForm" onSubmit={submitHandler} className="row">
      <div
        className="col-md-10"
        style={{ margin: "auto", padding: "40px 0px" }}
      >
        <h3 style={{ marginBottom: "20px" }}>Forget Password</h3>
        {error && <Alert type="danger" error={error} />}
        <div className="form-group">
          {step == 1 && (
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onInput={inputHandler}
              validators={[
                VALIDATOR_EMAIL("Please enter a valid email address."),
              ]}
            />
          )}
          {step == 2 && (
            <Input
              type="text"
              id="code"
              name="code"
              placeholder="CODE"
              onInput={inputHandler}
              validators={[
                VALIDATOR_MINLENGTH(6, "Please enter a valid code."),
              ]}
            />
          )}
          {step == 3 && (
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="New Password"
              onInput={inputHandler}
              validators={[VALIDATOR_PASSWORD()]}
            />
          )}
        </div>
        {step == 3 && (
          <div className="form-group">
            <Input
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirm Password"
              onInput={inputHandler}
              validators={[]}
            />
          </div>
        )}
        <div className="form-group">
          <Button
            type="submit"
            className="btn-primary w-100"
            disable={formState.isValid}
          >
            {step == 1 && "Forget"}
            {step == 2 && "Verify"}
            {step == 3 && "Create Password"}
          </Button>
        </div>
        {step == 1 && (
          <div className="text-right">
            <a href="#" onClick={swithHandler}>
              Back to Login
            </a>
          </div>
        )}
      </div>
    </form>
  );
};
export default ForgetForm;
