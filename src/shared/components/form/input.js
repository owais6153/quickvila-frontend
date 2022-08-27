import React, { useEffect, useCallback, useReducer } from "react";
import { validate } from "../../util/validation";
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
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
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
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
          className={`form-control ${props.className || false} ${
            !inputState.isValid &&
            inputState.isTouched &&
            "form-control--invalid"
          }`}
          rows={props.row || 3}
          name={props.name}
          id={props.id}
        />
        {!inputState.isValid && inputState.isTouched && (
          <p class="">{props.errorText}</p>
        )}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <input
          type={props.type}
          onChange={changeHandler}
          onBlur={touchHandler}
          className={`form-control ${props.className || false} ${
            !inputState.isValid &&
            inputState.isTouched &&
            "form-control--invalid"
          }`}
          placeholder={props.placeholder}
          name={props.name}
          id={props.id}
        />
        {!inputState.isValid && inputState.isTouched && (
          <p>{props.errorText}</p>
        )}
      </React.Fragment>
    );
  }
};
export default Input;
