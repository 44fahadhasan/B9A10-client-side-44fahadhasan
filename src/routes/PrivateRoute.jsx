import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpnninner from "../components/LoadingSpnninner/LoadingSpnninner";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingSpnninner />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/Login" state={location.pathname} />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
