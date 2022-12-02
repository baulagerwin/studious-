import _ from "lodash";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import Container from "../containers/Container";

function LandingPage() {
  const navigator = useNavigate();

  useEffect(() => {
    try {
      authService.getCurrentUser();
      navigator("/");
    } catch (ex) {}
  }, []);

  return (
    <Container>
      <h1 className="text-3xl font-bold">Landing Page</h1>
    </Container>
  );
}

export default LandingPage;
