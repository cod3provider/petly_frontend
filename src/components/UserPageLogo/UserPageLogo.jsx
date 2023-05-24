import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';
import {
  UserPageLogoLink,
  UserName,
  UserPageLogoWrapper,
} from './UserPageLogo.styled.js';

export default function UserPageLogo({ iconSize, userName, isMobile, showModal }) {
  const shouldShowName = isMobile ? showModal : true;
  const displayedName =  userName || 'User';

  return (
      <UserPageLogoWrapper modalOpen={showModal}>
        <UserPageLogoLink to="/user">
          <FaUser
              color="#FFC107"
              size={iconSize}
          />
          {shouldShowName && <UserName>{displayedName}</UserName>}
        </UserPageLogoLink>

      </UserPageLogoWrapper>
  );
}



UserPageLogo.propTypes = {
  userName: PropTypes.string,
  iconSize: PropTypes.string,
  isMobile: PropTypes.bool,
  showModal: PropTypes.bool,
};


