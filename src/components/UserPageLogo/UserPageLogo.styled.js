import styled from 'styled-components';
import { theme } from '../../utils/theme.jsx';
import { Link } from 'react-router-dom';

export const UserPageLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5px;
  right: 62px;

  @media (${theme.breakpoints.tablet.media}) {
    top: 5px;
    right: 62px;
  }
`;

export const UserPageLogoLink = styled(Link)`
  cursor: pointer;
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
