import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaPaw } from 'react-icons/fa';
import { theme } from '../../../utils/theme.jsx';

export const IconLink = styled(FaPaw)`
  width: 24px;
  height: 24px;
  color: ${theme.baseColors.accentYellow};
  transform: rotate(25deg);
  margin-left: 8px;
`;

export const Link = styled(NavLink)`
  display: flex;
  text-decoration: none;
  text-align: center;
  justify-content: center;

  border-radius: 40px;
  border: solid 2px ${theme.baseColors.accentYellow};
  background-color: ${theme.baseColors.backgroundWhiteColor};
  color: ${({ theme }) => theme.baseColors.accentYellow};

  padding: 7px 20px 7px 20px;
  width: 165px;

  &:hover,
  &:focus {
    background-color: ${theme.baseColors.accentYellow};
    color: ${({ theme }) => theme.baseColors.backgroundWhiteColor};

    ${IconLink} {
      color: ${theme.baseColors.backgroundWhiteColor};
    }
  }
`;

export const WrapDivAuthNav = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media (${theme.breakpoints.mobile.media}) {
    display: grid;
    text-align: center;
    justify-content: center;
  }

  @media (${theme.breakpoints.tablet.media}) {
    display: grid;
    text-align: center;
    justify-content: center;
  }
`;

export const WrapNav = styled.nav`
  display: grid;
  gap: 20px;

  @media (${theme.breakpoints.tablet.media}) {
    display: flex;
    margin-right: ${theme.fontSizes.l};
  }
`;
