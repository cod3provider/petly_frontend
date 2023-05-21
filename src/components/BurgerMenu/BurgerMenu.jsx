import PropTypes from 'prop-types';
import { BurgerIcons } from './BurgerMenu.styled.js';

export default function BurgerMenu({ onClick }) {
  return (
    <div onClick={onClick}>
      <BurgerIcons />
    </div>
  );
}

BurgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};
