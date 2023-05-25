import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '../../../utils/theme.jsx';

export const StyledNavLink = styled(NavLink)`
  padding: 10px 0;
  text-decoration: none;
  font-weight: 500;
  font-size: ${theme.fontSizes.xl};
  line-height: 1.38;
  color: #111111;
  text-decoration: none;
  gap: 20px;
  transition: ${theme.transition.color};

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
  margin-top: 140px;
  display: flex;
  flex-direction: column;

  list-style: none;
  padding: 0;

  @media (${theme.breakpoints.tablet.media}) {
    margin-top: 92px;
    font-size: ${theme.fontSizes.xxl};
  }

  @media (${theme.breakpoints.desktop.media}) {
    flex-direction: row;
    margin-left: 40px;
    margin-top: 0px;
  }
`;

export const StyledLi = styled.li`
  font-size: ${theme.fontSizes.x};
  
  padding: 0;

  &:not(:first-child) {
    margin-top: 20px;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  @media (${theme.breakpoints.tablet.media}) {
    font-size: ${theme.fontSizes.xxl};
    &:not(:first-child) {
      margin-top: 60px;
    }
  }

  @media (${theme.breakpoints.desktop.media}) {
    &:not(:first-child) {
      margin-left: 40px;
      margin-top: 0px;
    }
    &:last-child {
      margin-right: 270px;
    }

    &:first-child {
      left: 160px;
    }
  }
`;
