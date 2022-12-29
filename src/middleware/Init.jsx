import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomePage from "../pages/HomePage";
import { loadQnas } from "../store/qnas";
import { loadSubjects } from "../store/subjects";
import { userDetails } from "../store/user";

function Init({ user }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userDetails(user));
    dispatch(loadQnas());
    dispatch(loadSubjects());
  }, []);

  return <HomePage />;
}

export default Init;
