// Navbar.tsx

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  const navigate = useNavigate();

  if (!themeContext) {
    throw new Error("Navbar must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  const handleToggle = () => {
    toggleTheme();
  };

  const handleLogout = () => {
    // Redirect to '/loginpage' when logout is clicked
    navigate("/");
  };

  const handleTasksClick = () => {
    navigate("/counter"); // Navigate to the CounterPage component
  };

  return (
    <nav className="flex justify-between py-2">
      <div className="logo">
        <span className="font-bold text-xl mx-8">TODO LIST</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all">Home</li>
        <li
          className="cursor-pointer hover:font-bold transition-all"
          onClick={handleTasksClick}
        >
          Task
        </li>

        <button className="btn btn-square btn-ghost" onClick={handleToggle}>
          {/* your theme toggle button */}
        </button>

        <li
          className="cursor-pointer hover:font-bold transition-all"
          onClick={handleLogout}
        >
          Logout
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
