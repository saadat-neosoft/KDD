import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ isUserLoggedIn }) => {
  return true ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
