import { ContainerButton, ModalTitle, Button } from '../Modals.styled';
import { logout } from '../../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
// import { CiLogout } from 'react-icons/ci';
import { theme } from '../../../utils/theme';

import PropTypes from 'prop-types';

const ModalLogOut = ({ onClose }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logout());

  return (
    <>
      <ModalTitle>Already leaving?</ModalTitle>
      <ContainerButton>
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleLogOut} type="button">
          Yes
          {/* <CiLogout
            style={{ marginLeft: '11px' }}
            size={24}
            color={theme.baseColors.accentButtonColor}
          /> */}
        </Button>
      </ContainerButton>
    </>
  );
};

ModalLogOut.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalLogOut;
