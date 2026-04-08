import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export function PrivateRoute() {
  const { token } = useAuth();
  const isAuth = token || localStorage.getItem("token");

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
