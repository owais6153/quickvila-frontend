import React, { useState, useContext } from "react";
import Input from "../shared/components/form-elements/input";
import Button from "../shared/components/form-elements/button";
import Alert from "../shared/components/alert";
import { useForm } from "../shared/hooks/form-hook";
import { useHttpClient } from "../shared/hooks/http-hook";
import { AppContext } from "../shared/context/app-context";
import { VALIDATOR_MINLENGTH } from "../shared/util/validation";
import { toast } from "react-toastify";
import { apiUrl } from "../shared/helper";
const Verify = () => {
  const { sendRequest, error, clearError } = useHttpClient();
  const { auth } = useContext(AppContext);
  const [formState, inputHandler, setFormData] = useForm(
    {
      code: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const checkMaxLimit = (e) => {
    if (e.target.value.length > 6) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  };
  const resendCode = async (e) => {
    e.preventDefault();
    try {
      const responseData = await sendRequest(
        apiUrl(`code/resend`),
        "GET",
        null,
        {
          Authorization: `Bearer ${auth._token}`,
        }
      );
      if (responseData.status === 200) {
        auth.login(responseData.userId, auth._token, responseData.verified);
        toast.success("Code Resend!");
      }
    } catch (err) {}
  };
  const verifyHandler = async (e) => {
    e.preventDefault();
    clearError();
    if (!formState.isValid) {
      return;
    }
    try {
      const responseData = await sendRequest(
        apiUrl(`verify`),
        "POST",
        JSON.stringify({
          code: formState.inputs.code.value,
        }),
        {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth._token}`,
        }
      );
      if (responseData.status === 200) {
        auth.login(responseData.userId, auth._token, responseData.verified);
        toast.success("Successfully Verified");
      }
    } catch (err) {}
  };
  return (
    <form id="verifyForm" className="row" onSubmit={verifyHandler}>
      <div
        className="col-md-10"
        style={{ margin: "auto", padding: "40px 0px" }}
      >
        <h3>Please verify your account</h3>
        <p>We've send you a 6 digits code on your email!</p>
        {error && <Alert type="danger" error={error} />}
        <div className="form-group">
          <Input
            type="number"
            id="code"
            name="code"
            placeholder="CODE"
            checkMaxLimit={checkMaxLimit}
            onInput={inputHandler}
            validators={[VALIDATOR_MINLENGTH(6, "Please enter a valid code.")]}
          />
        </div>
        <div className="form-group">
          <Button
            type="submit"
            className="btn-primary w-100"
            text="Verify"
            disable={formState.isValid}
          />
        </div>
        Does'nt get the code
        <a href="#" onClick={resendCode}>
          Resend Email
        </a>
      </div>
    </form>
  );
};
export default Verify;
