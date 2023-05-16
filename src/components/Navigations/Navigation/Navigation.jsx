import { StyledLi, StyledNavLink, StyledUl } from './Navigation.styled.js';
import PropTypes from 'prop-types';

export default function Navigation({ onClick }) {
  return (
    <div>
      <StyledUl>
        <StyledLi>
          <StyledNavLink to="/news" onClick={onClick}>
            NewsPage
          </StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to="/notices" onClick={onClick}>
            NoticesPage
          </StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to="/friends" onClick={onClick}>
            OurFriendPage
          </StyledNavLink>
        </StyledLi>
      </StyledUl>
    </div>
  );
}

Navigation.propTypes = {
  onClick: PropTypes.func.isRequired,
};
