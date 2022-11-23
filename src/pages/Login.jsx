import { Link } from "react-router-dom";
import Container from "../containers/Container";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <Container>
      <div className="w-1/2 mx-auto mt-24">
        <p className="text-xl font-semibold uppercase text-gray-400 mb-2">
          Skyrocket your{" "}
          <span className="text-third border-b-2 border-third">studies</span>
        </p>
        <h1 className="text-6xl font-bold mb-4">
          Welcome to Studious<span className="text-second">.</span>{" "}
        </h1>
        <p className="text-xl font-medium text-gray-400 mb-10">
          Don't have an account? Try to register{" "}
          <Link to="/register" className="text-second">
            here
          </Link>
          .
        </p>
        <LoginForm />
      </div>
    </Container>
  );
}

export default Login;
