import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import config from "../../../config.json";

function useLoginFields() {
  const navigator = useNavigate();
  const [isValidating, setIsValidating] = useState(false);
  const [fields, setFields] = useState({
    username: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  });

  function handleOnChange(e) {
    setFields({
      ...fields,
      [e.target.name]: {
        value: e.target.value,
      },
    });
  }

  let isValid =
    Boolean(fields.username.value) || Boolean(fields.password.value);

  async function login() {
    setIsValidating(true);

    await authService.login({
      username: fields.username.value,
      password: fields.password.value,
    });
  }

  function loginSuccess() {
    const randomTimeInMS =
      Math.floor(Math.random() * config.validationTimeInMS) + 1;

    setTimeout(() => {
      setIsValidating(false);
      navigator("/");
    }, randomTimeInMS);
  }

  function loginFailed(ex) {
    const randomTimeInMS =
      Math.floor(Math.random() * config.validationTimeInMS) + 1;

    setFields({
      username: {
        value: fields.username.value,
        error: "",
      },
      password: {
        value: fields.password.value,
        error: "",
      },
    });

    setTimeout(() => {
      setIsValidating(false);

      const copy = { ...fields };

      ex.response.data.indexOf("username") > 0
        ? (copy.username.error = ex.response.data)
        : (copy.password.error = ex.response.data);

      setFields(copy);
    }, randomTimeInMS);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isValid) return;

    try {
      await login();
      loginSuccess();
    } catch (ex) {
      loginFailed(ex);
    }
  }

  return [fields, handleOnChange, isValidating, handleSubmit];
}

export default useLoginFields;
