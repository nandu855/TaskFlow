import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-700 shadow-lg">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-6 py-5">

        <div>
          <h1 className="text-3xl font-bold text-white">
            TaskFlow Pro
          </h1>

          <p className="text-blue-100 text-sm">
            Task Management System
          </p>
        </div>

        <div className="flex items-center gap-6">

          <Link
            to="/dashboard"
            className="text-white hover:text-gray-200 font-medium"
          >
            Dashboard
          </Link>

          <Link
            to="/profile"
            className="text-white hover:text-gray-200 font-medium"
          >
            Profile
          </Link>

          <ThemeToggle />

          <div className="text-right text-white">
            <p className="text-sm">Welcome</p>
            <p className="font-semibold">
              {user.name || "User"}
            </p>
          </div>

          <button
            onClick={logout}
            className="bg-white text-blue-700 px-5 py-2 rounded-xl hover:bg-gray-100 font-semibold"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}