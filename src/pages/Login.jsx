import jwtDecode from "jwt-decode";
import _ from "lodash";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userDetails } from "../store/user";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const jwt = localStorage.getItem(config.authTokenName);
      const user = jwtDecode(jwt);
      dispatch(userDetails({ details: user }));
      navigator("/");
    } catch (ex) {
      navigator("/landing-page");
    }
  }, []);

  return null;
}

export default Login;
