import { Routes, Route, Link, useLocation } from "react-router-dom";
import NotFound from "../../playground/src/pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/SignUp";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="border-b shadow-lg shadow-slate-100">
        <div className="container mx-auto py-2 px-8 flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-third">
            Studious
          </Link>
          <ul className="flex gap-8 items-center">
            <li>
              <Link
                to="/signup"
                className={`flex items-center gap-2 py-2 px-6 ${
                  pathname === "/signup"
                    ? "bg-first border-first"
                    : "bg-third border-third"
                } rounded-md hover:bg-first hover:border-first`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>

                <span className="text-l text-white">Sign Up</span>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className={`flex items-center gap-2 py-2 px-6 ${
                  pathname === "/login"
                    ? "bg-first border-third"
                    : "bg-third border-third"
                } rounded-md hover:bg-first hover:border-first`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <span className="text-l text-white">Log In</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
