import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadQnas } from "../store/qnas";
import { loadSubjects } from "../store/subjects";
import { userDetails } from "../store/user";

function useInit(user) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userDetails(user));
    dispatch(loadQnas());
    dispatch(loadSubjects());
  }, []);
}

export default useInit;
