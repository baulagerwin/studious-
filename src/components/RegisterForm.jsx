import _ from "lodash";
import Center from "../containers/Center";
import Column from "../containers/Column";
import ColumnSpanFull from "../containers/ColumnSpanFull";
import SubmitButton from "../elements/SubmitButton";
import TwoGrids from "../layouts/TwoGrids";
import UserName from "../components/UserName";
import Email from "../components/Email";
import Password from "../components/Password";
import TextBox from "../components/TextBox";
import { useRef, useState } from "react";
import userService from "../services/userService";

function RegisterForm() {
  const debounceID = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
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

  function isNotValid() {
    const { firstName, lastName, username, email, password } = fields;

    const isThereEmptyField =
      !Boolean(firstName.value) ||
      !Boolean(lastName.value) ||
      !Boolean(username.value) ||
      !Boolean(email.value) ||
      !Boolean(password.value);

    const isThereAnErrorField =
      Boolean(username.error) ||
      Boolean(email.error) ||
      Boolean(password.error);

    return isThereEmptyField || isThereAnErrorField;
  }

  function handleOnChange(e, errorMessage = "") {
    setFields({
      ...fields,
      [e.target.name]: {
        value: e.target.value,
        error: errorMessage,
      },
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const currentFields = { ...fields };
    const preSubmitFields = {
      firstName: {
        value: currentFields.firstName.value,
        error: "",
      },
      lastName: {
        value: currentFields.lastName.value,
        error: "",
      },
      username: {
        value: currentFields.username.value,
        error: "",
      },
      email: {
        value: currentFields.email.value,
        error: "",
      },
      password: {
        value: currentFields.password.value,
        error: "",
      },
    };

    if (isNotValid() && !_.isEqual(preSubmitFields, currentFields)) {
      setIsAnimating(true);
      setFields(preSubmitFields);

      clearTimeout(debounceID.current);
      debounceID.current = setTimeout(() => {
        setIsAnimating(false);
        setFields(currentFields);
      }, 600);

      return;
    }

    if (!isAnimating && !isNotValid()) {
      try {
        const result = await userService.register({
          firstName: fields.firstName.value,
          lastName: fields.lastName.value,
          username: fields.username.value,
          email: fields.email.value,
          password: fields.password.value,
        });
        console.log(result);
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
          setFields({
            ...fields,
            username: {
              ...fields.username,
              error: ex.response.data,
            },
          });
        }
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TwoGrids>
        <Column>
          <TextBox
            id="firstName"
            name="firstName"
            text="First name"
            value={fields.firstName.value}
            onChange={handleOnChange}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
            }
          />
        </Column>
        <Column>
          <TextBox
            id="lastName"
            name="lastName"
            text="Last name"
            value={fields.lastName.value}
            onChange={handleOnChange}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
            }
          />
        </Column>
        <ColumnSpanFull>
          <UserName
            id="usernameRegister"
            name="username"
            text="Username"
            value={fields.username.value}
            error={fields.username.error}
            onChange={handleOnChange}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            }
          />
        </ColumnSpanFull>
        <ColumnSpanFull>
          <Email
            id="email"
            name="email"
            text="Email"
            value={fields.email.value}
            error={fields.email.error}
            onChange={handleOnChange}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            }
          />
        </ColumnSpanFull>
        <ColumnSpanFull>
          <Password
            id="password"
            type="password"
            name="password"
            text="Password"
            value={fields.password.value}
            error={fields.password.error}
            onChange={handleOnChange}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            }
          />
        </ColumnSpanFull>
        <ColumnSpanFull>
          <Center>
            <SubmitButton>Create Account</SubmitButton>
          </Center>
        </ColumnSpanFull>
      </TwoGrids>
    </form>
  );
}

export default RegisterForm;
