import jwtDecode from "jwt-decode";
import _ from "lodash";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../store/user";
import Container from "../containers/Container";
import config from "../../config.json";

function Home() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.user.details);
  const isEmpty = _.isEmpty(details);

  useEffect(() => {
    try {
      const jwt = localStorage.getItem(config.authTokenName);
      const user = jwtDecode(jwt);
      dispatch(userDetails({ details: user }));
    } catch (ex) {}
  }, []);

  if (!isEmpty)
    return (
      <Container>
        <h1 className="text-3xl font-bold">Home Page</h1>
      </Container>
    );

  return (
    <Container>
      <h1 className="text-3xl font-bold">Landing Page</h1>
    </Container>
  );
}

export default Home;
