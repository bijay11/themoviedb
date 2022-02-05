import { useAuth } from "../contexts/AuthContext";
import Entertainment from "./Entertainment/Entertainment";
import Login from "./Non Secure Pages/Login";

const LandingPage = () => {
  const { currentUser, logout, loginUser } = useAuth();

  return currentUser && loginUser ? <Entertainment /> : <Login />;
};
export default LandingPage;
