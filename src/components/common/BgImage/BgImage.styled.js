import styled from 'styled-components';

import { theme } from '../../../utils/theme.jsx';

import bgImageMobile from '../../../assets/img/background/bg_mobile.png';
import bgImageTablet from '../../../assets/img/background/bg_tablet.png';
import bgImageDesktop from '../../../assets/img/background/bg_desktop.png';

export const BackgroundImageDiv = styled.div`
  position: absolute;
  z-index: -999;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${bgImageMobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;

  @media (min-width: ${theme.breakpoints.mobile.width}) {
    background-position: inherit;
  }

  @media (min-width: ${theme.breakpoints.tablet.width}) {
    background-image: url(${bgImageTablet});
  }

  @media ${theme.breakpoints.desktop.media} {
    background-image: url(${bgImageDesktop});
  }
`;
