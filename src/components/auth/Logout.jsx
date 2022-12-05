import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userReset } from "../../store/user";
import authService from "../../services/authService";
import { qnasReset } from "../../store/qnas";
import { subjectsReset } from "../../store/subjects";

function Logout() {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    authService.logout();

    dispatch(userReset());
    dispatch(qnasReset());
    dispatch(subjectsReset());
    navigator("/");
  }, []);

  return null;
}

export default Logout;
