import { useState } from "react";
import authService from "../services/authService";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";
import Container from "../containers/Container";
import LoginForm from "../components/forms/LoginForm";
import HalfContainer from "../containers/HalfContainer";
import LoginFormText from "../components/forms/LoginFormText";

function LoginPage() {
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

  function isValid() {
    return Boolean(fields.username.value) || Boolean(fields.password.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isValid()) return;

    try {
      setIsValidating(true);
      await loginSuccess();
    } catch (ex) {
      loginFailed(ex);
    }
  }

  async function loginSuccess() {
    const randomTimeInMS =
      Math.floor(Math.random() * config.validationTimeInMS) + 1;

    await authService.login({
      username: fields.username.value,
      password: fields.password.value,
    });

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

  return (
    <Container>
      <HalfContainer>
        <LoginFormText />
        <LoginForm
          fields={fields}
          onChange={handleOnChange}
          isValidating={isValidating}
          onSubmit={handleSubmit}
        />
      </HalfContainer>
    </Container>
  );
}

export default LoginPage;
