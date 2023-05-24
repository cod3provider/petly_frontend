import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import { IoPawOutline } from 'react-icons/io5';
import { FiArrowLeft } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export const BtnBox = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (${theme.breakpoints.mobile.media}) {
    margin-top: 12px;
  }
  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
    margin-top: 40px;
    flex-direction: row-reverse;
  }
  /* @media ${theme.breakpoints.desktop.media} {
    width: 460px;
  } */
`;

export const ButtonNext = styled.button`
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 16px;
  line-height: 1.38;

  letter-spacing: 0.04em;

  color: #fef9f9;
  display: flex;
  color: ${theme.baseColors.buttonTextColor};
  padding: 8px;

  min-width: 250px;

  align-items: center;
  justify-content: center;

  color: #fef9f9;
  background: #54adff;
  border-radius: 40px;

  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
    margin-left: 24px;
  }
`;
export const IconButton = styled(IoPawOutline)`
  width: 24px;
  height: 24px;
  margin-left: 12px;
  text-align: center;
  color: ${theme.baseColors.buttonTextColor};
  transform: rotate(40deg);
`;
export const ButtonBack = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  /* min-width: 250px; */

  align-items: center;
  justify-content: center;

  font-family: 'Manrope';

  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;

  letter-spacing: 0.04em;
  background-color: transparent;
  color: #54adff;

  @media (${theme.breakpoints.mobile.media}) {
    margin-top: 12px;
  }
`;
export const ArrowButtonIcon = styled(FiArrowLeft)`
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 1.4;
  margin-right: 12px;
  align-items: center;
  letter-spacing: 0.04em;
  /* background-color: #54adff; */
  color: #54adff;
  /* transform: rotate(40deg); */
`;

export const LinkStyled = styled(NavLink)`
  font-weight: 700;
  font-size: 16px;
  align-items: center;
  letter-spacing: 0.04em;

  color: ${theme.baseColors.accentButtonColor};
`;
