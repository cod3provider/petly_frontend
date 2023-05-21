// import burgermenu from '../../images/menu-hamburger.jpg';
import PropTypes from 'prop-types';
import { AiOutlineMenu } from 'react-icons/ai';

export default function BurgerMenu({ onClick }) {
  return (
    <div onClick={onClick}>
      <AiOutlineMenu size={20} color="#FFC107" />
    </div>
  );
}

BurgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};
