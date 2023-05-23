import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';
import {
  DivLinkWrapper,
  UserName,
  UserPageLogoWrapper,
} from './UserPageLogo.styled.js';
import { Link } from 'react-router-dom';

export default function UserPageLogo({
  iconSize,
  userName,
  isMobile,
  showModal,
}) {
  const isLoggedIn = !!userName;
  const shouldShowName = !isMobile || (isMobile && showModal && isLoggedIn);

  const displayedName = userName || 'User';

  return (
    <>
      {showModal ? (
        <UserPageLogoWrapper showModal={showModal}>
          <Link to="/user">
            <FaUser
              color="#FFC107"
              size={iconSize}
              style={!shouldShowName ? { display: 'none' } : null}
            />
          </Link>
          {shouldShowName && <UserName>{displayedName}</UserName>}
        </UserPageLogoWrapper>
      ) : (
        <DivLinkWrapper>
          <Link to="/user">
            <FaUser
              color="#FFC107"
              size={iconSize}
              style={!shouldShowName ? { display: 'none' } : null}
            />
          </Link>
          {shouldShowName && <UserName>{displayedName}</UserName>}
        </DivLinkWrapper>
      )}
    </>
  );
}

UserPageLogo.propTypes = {
  userName: PropTypes.string,
  iconSize: PropTypes.string,
  isMobile: PropTypes.bool,
  showModal: PropTypes.bool,
};
