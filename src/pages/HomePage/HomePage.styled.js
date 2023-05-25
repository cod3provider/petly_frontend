import styled from 'styled-components';

import { theme } from '../../utils/theme.jsx';

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

export const Wrap = styled.div`
  position: relative;
  margin: 91px auto 0;
  width: 320px;
  height: 560px;
  @media (${theme.breakpoints.tablet.media}) {
    width: 768px;
    height: 1120px;
  }

  @media ${theme.breakpoints.desktop.media} {
    padding: 0 15px;
    width: 1280px;
    height: 700px;
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  width: 550px;
  top: 168px;
  left: -115px;

  @media (${theme.breakpoints.tablet.media}) {
    width: 900px;
    top: 305px;
    left: -65px;
  }

  @media (${theme.breakpoints.desktop.media}) {
    width: 900px;
    top: 305px;
    //top: 30px;
    left: 365px;
  }
`;