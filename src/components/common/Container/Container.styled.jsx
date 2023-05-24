import styled from 'styled-components';

import { theme } from '../../../utils/theme.jsx';

export const ContainerStyled = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  @media (${theme.breakpoints.mobile.media}) {
    min-width: ${theme.breakpoints.mobile.width};
  }
  @media ${theme.breakpoints.tablet.media} {
    padding: 0 30px;
    width: ${theme.breakpoints.tablet.width};
  }
  @media ${theme.breakpoints.desktop.media} {
    padding: 0 15px;
    width: ${theme.breakpoints.desktop.width};
  }
`;
