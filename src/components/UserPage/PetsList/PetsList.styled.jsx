import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const List = styled.ul`
  //padding: 0;

  width: 100%;
  margin: 0 auto;

  @media ${theme.breakpoints.tablet.media} {
    //flex-direction: row-reverse;
    //padding: 20px 76px 20px 20px;
    //width: 700px;
    border-radius: 40px;
  }

  @media ${theme.breakpoints.desktop.media} {
    //width: 395px;
    height: 520px;
    //padding: 20px;
  }
`;

export const NoPetMessage = styled.p`
  text-align: center;

  @media screen and (min-width: 1280px) {
  }
`;
