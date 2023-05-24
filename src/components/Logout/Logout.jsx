import { OutBtn, OutWrap, OutText } from './Logout.styled';
import ModalLogOut from '../Modals/ModalLogOut/ModalLogOut';
import ModalBack from '../Modals/ModalBack';
import { useToggle } from '../../hooks/useToggle';

import { CiLogout } from 'react-icons/ci';
import { theme } from '../../utils/theme';

const Logout = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <OutWrap>
      <OutBtn type="button" onClick={open}>
        <OutText>
          <CiLogout
            style={{ marginRight: '11px' }}
            size={24}
            color={theme.baseColors.accentButtonColor}
          />
          Log Out
        </OutText>
      </OutBtn>
      {isOpen && (
        <ModalBack onClose={close}>
          <ModalLogOut onClose={close} />
        </ModalBack>
      )}
    </OutWrap>
  );
};
export default Logout;
