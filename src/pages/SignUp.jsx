import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container mx-auto">
      <div className="w-1/2 mx-auto mt-14">
        <p className="text-xl font-semibold uppercase text-gray-400 mb-2">
          Start for{" "}
          <span className="text-third border-b-2 border-third">free</span>
        </p>
        <h1 className="text-6xl font-bold mb-4">
          Create new account<span className="text-second">.</span>
        </h1>
        <p className="text-xl font-medium text-gray-400 mb-10">
          Already a Member?{" "}
          <Link to="/login" className="text-second">
            Log in
          </Link>
        </p>
        <form action="#" className="grid grid-cols-2 gap-x-5 gap-y-8">
          <div className="bg-gray-100 rounded-md p-4 relative">
            <input
              type="text"
              className="text-xl p-2 outline-none bg-gray-100 w-full"
            />
            <span className="text-xl absolute top-50 translate-y-2 left-0 translate-x-6 pointer-events-none">
              First name
            </span>
            <span className="absolute top-50 left-100 translate-y-3 -translate-x-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
            </span>
          </div>
          <div className="bg-gray-100 rounded-md p-4 relative">
            <input
              type="text"
              className="text-xl p-2 outline-none bg-gray-100 w-full"
            />
            <span className="text-xl absolute top-50 translate-y-2 left-0 translate-x-6 pointer-events-none">
              Last name
            </span>
            <span className="absolute top-50 left-100 translate-y-3 -translate-x-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
            </span>
          </div>
          <div className="bg-gray-100 rounded-md p-4 col-span-full relative">
            <input
              type="text"
              className="text-xl p-2 outline-none bg-gray-100 w-full"
            />
            <span className="text-xl absolute top-50 translate-y-2 left-0 translate-x-6 pointer-events-none">
              Email
            </span>
            <span className="absolute top-50 left-100 translate-y-3 -translate-x-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>
          </div>
          <div className="bg-gray-100 rounded-md p-4 col-span-full relative">
            <input
              type="text"
              className="text-xl p-2 outline-none bg-gray-100 w-full"
            />
            <span className="text-xl absolute top-50 translate-y-2 left-0 translate-x-6 pointer-events-none">
              Password
            </span>
            <span className="absolute top-50 left-100 translate-y-3 -translate-x-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </span>
          </div>
          <div className="p-4 col-span-full flex justify-center items-center">
            <button
              type="submit"
              className="border border-second bg-second hover:bg-first hover:border-first py-4 px-8 rounded-full text-xl text-white"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
