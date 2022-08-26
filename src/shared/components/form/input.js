import React, { useEffect, useCallback, useReducer } from "react";
import VALIDATE from "../../util/helper/validation";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        valid: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    valid: props.initialValid || false,
  });

  // const { id, onInput } = props;
  const { value, isValid } = inputState;

  // useEffect(() => {
  //   onInput(id, value, isValid);
  // }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      valid: true,
    });
  };

  if (props.type === "textarea") {
    return (
      <textarea
        onChange={changeHandler}
        placeholder={props.placeholder}
        className={`form-control ${props.className}`}
        name={props.name}
        id={props.id}
      />
    );
  } else {
    return (
      <input
        type={props.type}
        onChange={changeHandler}
        className={`form-control ${props.className}`}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
      />
    );
  }
};
export default Input;
