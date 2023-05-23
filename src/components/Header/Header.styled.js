import styled from 'styled-components';
import { TfiClose } from 'react-icons/tfi';
import { theme } from '../../utils/theme.jsx';

export const CloseIcons = styled(TfiClose)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: ${theme.baseColors.accentYellow};
`;

export const HeaderStyled = styled.header`
  margin-top: ${theme.fontSizes.ml};
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 28px;
  z-index: 2;

  @media (${theme.breakpoints.tablet.media}) {
    margin-top: ${theme.fontSizes.l};
    height: 44px;
  }

  @media (${theme.breakpoints.tablet.desktop}) {
    margint-top: ${theme.fontSizes.ml};
  }
`;

export const DivStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const ModalStyled = styled.div`
  position: fixed;
  top: 55px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;

  @media (${theme.breakpoints.tablet.media}) {
    top: 60px;
  }
`;
export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
