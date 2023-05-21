import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '../../../utils/theme.jsx';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: ${theme.fontSizes.xl};
  line-height: 1.38;
  color: #111111;
  text-decoration: none;
  gap: 20px;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.baseColors.accentYellow};
  }

  @media (${theme.breakpoints.tablet.media}) {
    font-size: ${theme.fontSizes.xxl};
  }

  @media (${theme.breakpoints.desktop.media}) {
    font-size: ${theme.fontSizes.ml};
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (${theme.breakpoints.tablet.media}) {
    gap: 60px;
  }

  @media (${theme.breakpoints.desktop.media}) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const StyledLi = styled.li`
  padding: 0;
  margin: 0;
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
