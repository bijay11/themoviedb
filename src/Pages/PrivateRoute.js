import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoute;
