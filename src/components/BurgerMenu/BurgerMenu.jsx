import PropTypes from 'prop-types';
import { BurgerIcons, BurgerWrapper } from './BurgerMenu.styled.js';

export default function BurgerMenu({ onClick }) {
  return (
    <BurgerWrapper onClick={onClick}>
      <BurgerIcons />
    </BurgerWrapper>
  );
}

BurgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};
