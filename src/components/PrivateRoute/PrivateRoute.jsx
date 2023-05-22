import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { refreshThunk, getIsLoggedIn } from '../../redux/auth/authSelectors.js';

const PrivateRoute = ({ children }) => {
  console.log(children);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(refreshThunk);
  if (isRefreshing) {
    return null;
  }

  // const responce = !isLoggedIn ? <Navigate to="/login" /> : children;
  return children;
};

// PrivateRoute.propTypes = {
//   children: PropTypes.node,
// };

export default PrivateRoute;
