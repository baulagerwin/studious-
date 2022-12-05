import _ from "lodash";
import authService from "../../services/authService";
import LandingPage from "../../pages/LandingPage";
import HomePage from "../../pages/HomePage";

function Login() {
  let user;

  try {
    user = authService.getCurrentUser();
  } catch (ex) {}

  if (!_.isEmpty(user)) return <HomePage user={user} />;
  return <LandingPage />;
}

export default Login;
