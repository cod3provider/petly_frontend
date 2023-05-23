import styled from 'styled-components';
import { theme } from '../../utils/theme.jsx';

export const TitleStyled = styled.h1`
  margin: 40px 0 25px;
  font-size: ${theme.fontSizes.l};

  @media ${theme.breakpoints.tablet.media} {
    font-size: ${theme.fontSizes.xxl};
    margin: 80px 0 60px;
  }

  @media ${theme.breakpoints.desktop.media} {
    margin: 80px 0 60px;
    font-size: ${theme.fontSizes.xxl};
  }
`;