import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { refreshThunk, getIsLoggedIn } from '../../redux/auth/authSelectors.js';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(refreshThunk);

  if (isRefreshing) {
    return null;
  }

  return !isLoggedIn ? <Navigate to="/login" /> : children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
// import PropTypes from 'prop-types';
// import { Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getIsLoggedIn } from '../../redux/auth/authSelectors.js';
//
// export default function PrivateRoute({ path, children }) {
//   const isLoggedIn = useSelector(getIsLoggedIn);
//   return isLoggedIn ? children : <Navigate to="/login" replace />;
// }const userName = useSelector(getName);
// userName={userName?.name}

// PrivateRoute.propTypes = {
//   path: PropTypes.string.isRequired,
//   children: PropTypes.element.isRequired,
// };
// PrivateRoute.propTypes = {
//   children: PropTypes.element.isRequired,
// };
