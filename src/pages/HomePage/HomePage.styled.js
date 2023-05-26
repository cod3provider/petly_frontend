import styled from 'styled-components';

import { theme } from '../../utils/theme.jsx';
import { SectionStyled } from '../../components/common/Section/Section.styled.jsx';

export const MainTitle = styled.h1`
  margin: 0 auto;
  width: 280px;
  font-family: 'Manrope', sans-serif;
  font-size: ${theme.fontSizes.x};
  font-weight: 700;
  line-height: 1.38;
  color: ${theme.baseColors.titleColor};
  
  
  @media ${theme.breakpoints.tablet.media} {
    margin-left: 30px;
    width: 590px;
    text-align: left;
    font-size: ${theme.fontSizes.MainTitle};
    line-height: 1.47;
  }

  @media ${theme.breakpoints.desktop.media} {
    padding-top: 160px;
    margin-left: 15px;
    width: 500px;
    text-align: left;
    font-size: ${theme.fontSizes.MainTitle};
    line-height: 1.3;
  }
`;

export const Wrap = styled.div`
  position: relative;
  width: 320px;
  height: 560px;
  margin: 0 auto;
  
  @media (${theme.breakpoints.tablet.media}) {
    width: 768px;
    height: 1125px;
  }
  @media (${theme.breakpoints.desktop.media}) {
    width: 1280px;
    height: 700px;
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  width: 550px;
  top: 120px;
  left: -115px;

  @media (${theme.breakpoints.tablet.media}) {
    width: 900px;
    top: 200px;
    left: -65px;
  }

  @media (${theme.breakpoints.desktop.media}) {
    width: 900px;
    top: 0;
    left: 365px;
  }
`;

export const HomeSection= styled(SectionStyled)`
  padding-top: 60px;
  
  @media ${theme.breakpoints.tablet.media} {
    padding-top: 40px;
  }

  @media ${theme.breakpoints.desktop.media} {
    padding-top: 30px;
  }
`