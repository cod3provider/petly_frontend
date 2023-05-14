import burgermenu from '../../images/menu-hamburger.jpg';
import PropTypes from 'prop-types';

export default function BurgerMenu({ onClick }) {
  return (
    <div onClick={onClick}>
      <img src={burgermenu} alt="burgerMenu" />
    </div>
  );
}

BurgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};
