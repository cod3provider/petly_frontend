import styled from 'styled-components';
import { theme } from '../../../utils/theme.jsx';

export const TitleStyled = styled.h1`
  //margin: 40px 0 25px;
  margin-bottom: 25px;
  font-size: ${theme.fontSizes.l};

  @media ${theme.breakpoints.tablet.media} {
    font-size: ${theme.fontSizes.xxl};
    margin-bottom: 40px;
  }

  @media ${theme.breakpoints.desktop.media} {
    margin-bottom: 40px;
    font-size: ${theme.fontSizes.xxl};
  }
`;