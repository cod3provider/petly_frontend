import styled from "styled-components";

import { theme } from "../../utils/theme.jsx";

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const MainTitle = styled.h1`
  margin: 0 auto;
  padding-top: 60px;
  width: 280px;
  font-weight: 700;
  font-size: ${theme.fontSizes.x};
  line-height: 1.38;
  color: ${theme.baseColors.titleColor};
  text-align: center;
  font-family: "Poppins", sans-serif;

  @media (min-width: ${theme.breakpoints.tablet.width}) {
    padding-top: 80px;
    width: 580px;
    font-size: ${theme.fontSizes.MainTitle};
    line-height: 1.47;
  }

  @media ${theme.breakpoints.desktop.media} {
    padding-top: 190px;
    width: 500px;
  }
`;

export const Wrap = styled.div`
  position: relative;
  width: 320px;
  height: 560px;
  margin: 0 auto;

  @media (${theme.breakpoints.tablet.media}) {
    width: 768px;
    height: 1120px;
  }

  @media ${theme.breakpoints.desktop.media} {
    width: 1280px;
    height: 700px;
  }
`;

export const MobileHero = styled.img`
  position: absolute;
  width: 550px;
  top: 168px;
  left: -95px;

  // @media (${theme.breakpoints.tablet.media}) {
  //   width: 900px;
  //   top: 305px; 
  // }
  //
  // @media (${theme.breakpoints.desktop.media}) {
  //   top: 30px;
  //   left: 365px;
  // }
`;

export const TabletHero = styled.img`
  @media (${theme.breakpoints.tablet.media}) {
    width: 900px;
    top: 305px;
  }

  @media (${theme.breakpoints.desktop.media}) {
    top: 30px;
    left: 365px;
  }
`