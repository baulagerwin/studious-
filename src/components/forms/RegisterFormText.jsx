import { Link } from "react-router-dom";

function RegisterFormText() {
  return (
    <>
      <p className="text-xl font-semibold uppercase text-gray-400 mb-2">
        Start for{" "}
        <span className="text-third border-b-2 border-third">free</span>
      </p>
      <h1 className="text-6xl font-bold mb-4">
        Create new account
        <span className="text-second">.</span>{" "}
      </h1>
      <p className="text-xl font-medium text-gray-400 mb-10">
        Already a member?{" "}
        <Link to="/login" className="text-second">
          Log In
        </Link>
        .
      </p>
    </>
  );
}

export default RegisterFormText;
