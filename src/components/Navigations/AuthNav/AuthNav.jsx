import { IconLink, Link, WrapDivAuthNav, WrapNav } from './AuthNav.styled.js';
import PropTypes from 'prop-types';

export default function AuthNav({ onClick }) {
  return (
    <WrapDivAuthNav>
      <WrapNav>
        <Link to="/login" onClick={onClick}>
          Log IN
          <IconLink />
        </Link>
        <Link to="/register" onClick={onClick}>
          Registration
        </Link>
      </WrapNav>
    </WrapDivAuthNav>
  );
}

AuthNav.propTypes = {
  onClick: PropTypes.func.isRequired,
};
