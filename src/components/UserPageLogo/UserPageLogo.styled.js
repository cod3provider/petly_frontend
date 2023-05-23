import styled from 'styled-components';
import { theme } from '../../utils/theme.jsx';
import { Link } from 'react-router-dom';

export const UserPageLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top:  ${props => (props.modalOpen ? '64px' : '0px')};
  right: ${props => (props.modalOpen ? `calc(50% - 40px)` : '32px')};
  z-index: 1000;
 
  @media (${theme.breakpoints.tablet.media}) {
    top: 5px;
    right: 62px;
    display: ${props => (props.modalOpen ? 'none' : 'flex')};
  }
`;

export const UserPageLogoLink = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const UserName = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.baseColors.accentYellow};
  margin-left: 12px;
  
`;
