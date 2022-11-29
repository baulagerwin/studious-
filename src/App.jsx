import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/logging-in" element={<Login />} />
        <Route path="/logging-out" element={<Logout />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
