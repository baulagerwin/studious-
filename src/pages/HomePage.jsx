import _ from "lodash";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "../containers/Container";

function HomePage() {
  const navigator = useNavigate();
  const details = useSelector((state) => state.user.details);
  const isEmpty = _.isEmpty(details);

  useEffect(() => {
    if (isEmpty) navigator("/landing-page");
  }, []);

  return (
    <Container>
      <h1 className="text-3xl font-bold">Home Page</h1>
    </Container>
  );
}

export default HomePage;
