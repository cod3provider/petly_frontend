import styled from 'styled-components';
import { TfiClose } from 'react-icons/tfi';
import { theme } from '../../utils/theme.jsx';

export const CloseIcons = styled(TfiClose)`
  //padding: 20px 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: ${theme.baseColors.accentYellow};
`;

export const HeaderStyled = styled.header`
 
  position: relative;
  display: flex;
  align-items: center;
  
  width: 100%;
  height: 28px;
  z-index: 101;

  @media (${theme.breakpoints.tablet.media}) {
    height: 44px;
  }
  @media (${theme.breakpoints.tablet.desktop}) {
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
  top: 45px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;

  background-color: ${theme.baseColors.filterActiveTextColor};

  @media (${theme.breakpoints.tablet.media}) {
    top:52px;
  }
`;
export const NavStyled = styled.nav`

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

`;

export const PaddingWrapper = styled.div`
  padding: 20px 15px;

  @media (${theme.breakpoints.tablet.media}) {

    padding: 24px 32px 0 32px;

  }

  @media (${theme.breakpoints.tablet.media}) {
    padding: 20px 16px 0 16px;
  }
`
