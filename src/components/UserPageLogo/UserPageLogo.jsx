import { FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function UserPageLogo({ iconSize, userName }) {
  const displayName = userName || 'User';
  return (
    <div>
      <Link to="/">
        {/*<h3>User</h3>*/}
        <h3>{displayName}</h3>
        <FaUser color="#FFC107" size={iconSize} />
      </Link>
    </div>
  );
}

UserPageLogo.propTypes = {
  userName: PropTypes.string,
  iconSize: PropTypes.string,
};
