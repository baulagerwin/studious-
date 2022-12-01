import _ from "lodash";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../containers/Container";
import { useDispatch } from "react-redux";
import { userDetails } from "../store/user";
import { loadQnas } from "../store/qnas";
import { loadSubjects } from "../store/subjects";
import authService from "../services/authService";
import Accordion from "../components/Accordion";

function HomePage() {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const user = authService.getCurrentUser();
      dispatch(userDetails(user));
      dispatch(loadQnas());
      dispatch(loadSubjects());
    } catch (ex) {
      navigator("/landing-page");
    }
  }, []);

  return (
    <Container>
      <div className="w-4/6 mx-auto mt-5">
        <Accordion />
      </div>
    </Container>
  );
}

export default HomePage;
