import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ component, redirectTo }) {
  const isLogggedIn = useSelector(selectIsLoggedIn);

  return isLogggedIn ? <Navigate to={redirectTo} /> : component;
}