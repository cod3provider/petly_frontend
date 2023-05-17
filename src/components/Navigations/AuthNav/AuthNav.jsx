import { Link } from './AuthNav.styled.js';
import PropTypes from 'prop-types';

export default function AuthNav({ onClick }) {
  return (
    <div>
      <nav style={{ display: 'block' }}>
        <Link to="/login" style={{ textDecoration: 'none' }} onClick={onClick}>
          Login
        </Link>
        <Link
          to="/register"
          style={{ textDecoration: 'none' }}
          onClick={onClick}
        >
          Registration
        </Link>
      </nav>
    </div>
  );
}

AuthNav.propTypes = {
  onClick: PropTypes.func.isRequired,
};
