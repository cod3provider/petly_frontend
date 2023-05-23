import { StyledLi, StyledNavLink, StyledUl } from './Navigation.styled.js';
import PropTypes from 'prop-types';

export default function Navigation({ onClick }) {
  return (
    <div>
      <StyledUl>
        <StyledLi>
          <StyledNavLink to="/news" onClick={onClick}>
            News
          </StyledNavLink>
        </StyledLi>
        <StyledLi>
//           <StyledNavLink to="/notices" onClick={onClick}>
//             Find pet
          <StyledNavLink to="/notices/sell" onClick={onClick}>
            NoticesPage
          </StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to="/friends" onClick={onClick}>
            Our friends
          </StyledNavLink>
        </StyledLi>
      </StyledUl>
    </div>
  );
}

Navigation.propTypes = {
  onClick: PropTypes.func.isRequired,
};
