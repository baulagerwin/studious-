import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../services/userService";
import authService from "../services/authService";
import subjectService from "../services/subjectService";
import HalfContainer from "../containers/HalfContainer";
import Container from "../containers/Container";
import RegisterForm from "../components/forms/RegisterForm";
import RegisterFormText from "../components/forms/RegisterFormText";
import config from "../../config.json";

function RegisterPage() {
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

  function handleOnChange(e, errorMessage = "") {
    setFields({
      ...fields,
      [e.target.name]: {
        value: e.target.value,
        error: errorMessage,
      },
    });
  }

  function isNotValid() {
    const { firstName, lastName, username, email, password } = fields;

    const isThereAnErrorField =
      Boolean(username.error) ||
      Boolean(email.error) ||
      Boolean(password.error);

    const isThereEmptyField =
      !Boolean(firstName.value) ||
      !Boolean(lastName.value) ||
      !Boolean(username.value) ||
      !Boolean(email.value) ||
      !Boolean(password.value);

    return isThereAnErrorField || isThereEmptyField;
  }

  function validateFields() {
    const randomTimeInMS =
      Math.floor(Math.random() * config.validationTimeInMS) + 1;

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

  async function registerSuccess() {
    const randomTimeInMS =
      Math.floor(Math.random() * config.validationTimeInMS) + 1;

    const response = await userService.register({
      firstName: fields.firstName.value,
      lastName: fields.lastName.value,
      username: fields.username.value,
      email: fields.email.value,
      password: fields.password.value,
    });

    authService.loginWithJwt(response.headers["x-auth-token"]);
    subjectService.initSubject({ name: "Unclassified" });

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

    setIsValidating(true);

    try {
      if (isNotValid() && !isValidating) return validateFields();
      if (!isNotValid() && !isValidating) await registerSuccess();
    } catch (ex) {
      registerFailed(ex);
    }
  }

  return (
    <Container>
      <HalfContainer>
        <RegisterFormText />
        <RegisterForm
          fields={fields}
          onChange={handleOnChange}
          isValidating={isValidating}
          onSubmit={handleSubmit}
        />
      </HalfContainer>
    </Container>
  );
}

export default RegisterPage;
