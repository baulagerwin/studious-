import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userDetails } from "../store/user";
import config from "../../config.json";

function Logout() {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem(config.authTokenName);

    dispatch(userDetails({ details: {} }));
    navigator("/");
  }, []);

  return null;
}

export default Logout;
