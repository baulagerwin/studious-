import Center from "../containers/Center";
import ColumnSpanFull from "../containers/ColumnSpanFull";
import SubmitButton from "../elements/SubmitButton";
import TwoGrids from "../layouts/TwoGrids";
import { useState } from "react";
import authService from "../services/authService";
import TextBox from "./TextBox";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigator = useNavigate();
  const [fields, setFields] = useState({
    username: {
      value: "",
    },
    password: {
      value: "",
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

  async function handleSubmit(e) {
    e.preventDefault();

    if (!Boolean(fields.username.value) || !Boolean(fields.password.value))
      return;

    try {
      const { data } = await authService.login({
        username: fields.username.value,
        password: fields.password.value,
      });

      localStorage.setItem("token", data);
      navigator("/main");
    } catch (ex) {
      if (ex.response && ex.response.status === 400)
        toast.error(ex.response.data);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TwoGrids>
        <ColumnSpanFull>
          <TextBox
            id="usernameLogin"
            name="username"
            text="Username"
            value={fields.username.value}
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
          <TextBox
            id="password"
            name="password"
            type="password"
            text="Password"
            value={fields.password.value}
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
            <SubmitButton>Log In</SubmitButton>
          </Center>
        </ColumnSpanFull>
      </TwoGrids>
    </form>
  );
}

export default LoginForm;
