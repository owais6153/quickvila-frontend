const VALIDATOR_TYPE_REQUIRE = "REQUIRE";
const VALIDATOR_TYPE_MINLENGTH = "MINLENGTH";
const VALIDATOR_TYPE_MAXLENGTH = "MAXLENGTH";
const VALIDATOR_TYPE_MIN = "MIN";
const VALIDATOR_TYPE_MAX = "MAX";
const VALIDATOR_TYPE_EMAIL = "EMAIL";
const VALIDATOR_TYPE_FILE = "FILE";

export const VALIDATOR_REQUIRE = (errorText) => ({
  type: VALIDATOR_TYPE_REQUIRE,
  errorText,
});
export const VALIDATOR_FILE = (errorText) => ({
  type: VALIDATOR_TYPE_FILE,
  errorText,
});
export const VALIDATOR_MINLENGTH = (val, errorText) => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  errorText,
  val,
});
export const VALIDATOR_MAXLENGTH = (val, errorText) => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  errorText,
  val,
});
export const VALIDATOR_MIN = (val, errorText) => ({
  type: VALIDATOR_TYPE_MIN,
  errorText,
  val,
});
export const VALIDATOR_MAX = (val, errorText) => ({
  type: VALIDATOR_TYPE_MAX,
  errorText,
  val,
});
export const VALIDATOR_EMAIL = (errorText) => ({
  type: VALIDATOR_TYPE_EMAIL,
  errorText,
});

export const validate = (value, validators) => {
  let isValid = true;
  let errors = [];
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
      if (!isValid) errors.push(validator.errorText);
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val;
      if (!isValid) errors.push(validator.errorText);
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val;
      if (!isValid) errors.push(validator.errorText);
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.val;
      if (!isValid) errors.push(validator.errorText);
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.val;
      if (!isValid) errors.push(validator.errorText);
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
      if (!isValid) errors.push(validator.errorText);
    }
  }
  return { isValid, errors };
};
