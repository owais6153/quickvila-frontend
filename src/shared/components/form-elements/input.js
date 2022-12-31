import React, { useEffect, useReducer } from "react";
import { validate } from "../../util/validation";
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: !action.validators
          ? { isValid: true, errors: [] }
          : validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    let check = isValid.isValid != undefined ? isValid.isValid : isValid;
    onInput(id, value, check);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators || false,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  if (props.type === "textarea") {
    return (
      <React.Fragment>
        <textarea
          onChange={changeHandler}
          onBlur={touchHandler}
          placeholder={props.placeholder}
          className={`form-control ${props.className || undefined} ${
            (inputState.isValid.isValid === false ||
              inputState.isValid === false) &&
            inputState.isTouched &&
            "form-control--invalid"
          }`}
          rows={props.row || 3}
          name={props.name}
          id={props.id}
          value={inputState.value}
        />
        {(inputState.isValid.isValid === false ||
          inputState.isValid === false) &&
          inputState.isTouched &&
          inputState.isValid.errors &&
          inputState.isValid.errors.map((error, index) => {
            <p className="error-text" key={index}>
              {error}
            </p>;
          })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <input
          type={props.type}
          onChange={changeHandler}
          onBlur={touchHandler}
          onInput={props.checkMaxLimit}
          className={`form-control ${props.className || undefined} ${
            (inputState.isValid.isValid === false ||
              inputState.isValid === false) &&
            props.type !== "search" &&
            inputState.isTouched &&
            "form-control--invalid"
          }`}
          value={inputState.value}
          placeholder={props.placeholder}
          name={props.name}
          id={props.id}
          readOnly={props.readOnly}
          min={props.min}
          max={props.max}
        />
        {(inputState.isValid.isValid === true || inputState.isValid === true) &&
          props.id === "tip" &&
          inputState.value > 0 && (
            <p
              style={{
                fontSize: "14px",
                marginTop: "4px",
                marginBottom: "0px",
                fontWeight: 600,
                color: "green",
              }}
            >
              Thank you for the Tip!
            </p>
          )}

        {(inputState.isValid.isValid === false ||
          inputState.isValid === false) &&
          inputState.isTouched &&
          inputState.isValid.errors &&
          inputState.isValid.errors.map((error, index) => {
            return (
              <p className="error-text" key={index}>
                {error}
              </p>
            );
          })}
      </React.Fragment>
    );
  }
};
export default Input;
