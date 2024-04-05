import { useState } from "react";
import { Outlet } from "react-router-dom";
import LoginPage from "./LoginPage";

const useAuth = () => {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return { isLoggedIn, setIsLoggedIn }; // Return both login status and setter function
};

const ProtectedRoutes = () => {
  // Retrieve login status and setter function from useAuth hook
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  // Render the protected routes if user is authenticated, otherwise render the login page
  return isLoggedIn ? <Outlet /> : <LoginPage handleAuth={setIsLoggedIn} />;
};
 
export default ProtectedRoutes;
