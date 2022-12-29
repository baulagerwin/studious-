import config from "../../../config.json";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../../services/userService";
import authService from "../../services/authService";
import subjectService from "../../services/subjectService";

function useRegisterFields() {
  const navigator = useNavigate();
  const debounceID = useRef(null);
  const [isValidating, setIsValidating] = useState(false);
  const [fields, setFields] = useState({
    firstName: {
      value: "",
      error: "",
    },
    lastName: {
      value: "",
      error: "",
    },
    username: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  });

  let isThereAnErrorField =
    Boolean(fields.username.error) ||
    Boolean(fields.email.error) ||
    Boolean(fields.password.error);

  let isThereEmptyField =
    !Boolean(fields.firstName.value) ||
    !Boolean(fields.lastName.value) ||
    !Boolean(fields.username.value) ||
    !Boolean(fields.email.value) ||
    !Boolean(fields.password.value);

  function handleOnChange(e, errorMessage = "") {
    setFields({
      ...fields,
      [e.target.name]: {
        value: e.target.value,
        error: errorMessage,
      },
    });
  }

  function validateFields() {
    const randomTimeInMS =
      Math.floor(Math.random() * config.validationTimeInMS) + 1;

    setIsValidating(true);

    const preSubmitFields = {
      firstName: {
        value: fields.firstName.value,
        error: "",
      },
      lastName: {
        value: fields.lastName.value,
        error: "",
      },
      username: {
        value: fields.username.value,
        error: "",
      },
      email: {
        value: fields.email.value,
        error: "",
      },
      password: {
        value: fields.password.value,
        error: "",
      },
    };

    setFields(preSubmitFields);

    clearTimeout(debounceID.current);
    debounceID.current = setTimeout(() => {
      setIsValidating(false);
      setFields(fields);
    }, randomTimeInMS);
  }

  async function register() {
    setIsValidating(true);

    const response = await userService.register({
      firstName: fields.firstName.value,
      lastName: fields.lastName.value,
      username: fields.username.value,
      email: fields.email.value,
      password: fields.password.value,
    });

    authService.loginWithJwt(response.headers["x-auth-token"]);
    subjectService.initSubject({ name: "Unclassified" });
  }

  function registerSuccess() {
    const randomTimeInMS =
      Math.floor(Math.random() * config.validationTimeInMS) + 1;

    setTimeout(() => {
      setIsValidating(false);
      navigator("/");
    }, randomTimeInMS);
  }

  function registerFailed(ex) {
    setIsValidating(false);
    const copy = { ...fields };
    copy.username.error = ex.response.data;
    setFields(copy);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (isThereAnErrorField && !isValidating) return validateFields();
      if (isThereEmptyField) return;
      if (!isThereAnErrorField && !isValidating) {
        await register();
        registerSuccess();
      }
    } catch (ex) {
      registerFailed(ex);
    }
  }

  return [fields, handleOnChange, isValidating, handleSubmit];
}

export default useRegisterFields;
