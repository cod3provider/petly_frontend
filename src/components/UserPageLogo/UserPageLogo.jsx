import { FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function UserPageLogo({ iconSize }) {
  return (
    <div>
      <h3>User</h3>
      <FaUser color="#FFC107" size={iconSize} />;
    </div>
  );
}

UserPageLogo.propTypes = {
  iconSize: PropTypes.number,
};
