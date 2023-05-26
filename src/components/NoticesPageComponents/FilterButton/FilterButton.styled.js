import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import { HiOutlineFilter } from 'react-icons/hi';

export const FilterButtonIcon = styled(HiOutlineFilter)`
  color: #ffffff;
  width: 24px;
  height: 24px;

  @media (${theme.breakpoints.tablet.media}) {
    margin-left: 8px;
  }

  @media (${theme.breakpoints.desktop.media}) {
    margin-left: 8px;
  }
`;

export const FilterBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 16px;
  color: #ffffff;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  border-radius: 50%;
  height: 80px;
  background: ${theme.baseColors.accentButtonColor};
  transition: ${theme.transition.bg};

  &:hover,
  &:focus {
    background: ${theme.baseColors.buttonHoverBgColor};
  }

  @media (${theme.breakpoints.mobile.media}) {
    position: fixed;
    z-index: 2;
    right: calc(50vw - 140px);
    bottom: 50px;
    width: 80px;
  }

  @media (${theme.breakpoints.tablet.media}) {
    flex-direction: row-reverse;
    height: 40px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 40px;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.04em;
    padding-top: 0;
    padding-bottom: 0;
  }

  @media (${theme.breakpoints.desktop.media}) {
    flex-direction: row-reverse;
    height: 40px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 40px;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.04em;
    padding-top: 0;
    padding-bottom: 0;
  }
`;
