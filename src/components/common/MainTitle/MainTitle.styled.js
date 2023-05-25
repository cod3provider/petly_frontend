import styled from 'styled-components';
import { theme } from '../../../utils/theme.jsx';

export const MainTitle = styled.h1`
  position: absolute;
  top: -100px;
  margin: 0 auto;
  padding-top: 60px;
  width: 280px;
  font-weight: 700;
  font-size: ${theme.fontSizes.x};
  line-height: 1.38;
  color: ${theme.baseColors.titleColor};
  text-align: center;
  font-family: 'Poppins', sans-serif;

  @media (min-width: ${theme.breakpoints.tablet.width}) {
    padding-top: 80px;
    width: 580px;
    font-size: ${theme.fontSizes.MainTitle};
    line-height: 1.47;
  }

  @media ${theme.breakpoints.desktop.media} {
    //padding-top: 190px;
    top: 100px;
    width: 550px;
    text-align: start;
    font-weight: 800;
  }
`;