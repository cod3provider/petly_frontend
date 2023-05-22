import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  // refreshThunk,
  getIsLoggedIn
} from '../../redux/auth/authSelectors.js';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const isRefreshing = useSelector(refreshThunk);

  // if (isRefreshing) {
    // return null;
  // }

  return !isLoggedIn ? <Navigate to="/login" /> : children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
