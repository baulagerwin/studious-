import _ from "lodash";
import authService from "../services/authService";
import LandingPage from "../pages/LandingPage";
import Init from "./Init";

function Login() {
  let user;

  try {
    user = authService.getCurrentUser();
  } catch (ex) {}

  if (!_.isEmpty(user)) return <Init user={user} />;
  return <LandingPage />;
}

export default Login;
