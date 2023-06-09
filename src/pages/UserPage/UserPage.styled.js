import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const Wrap = styled.div`
  padding: 20px 8px 25px;
  background: rgb(255, 255, 255);
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;

  @media ${theme.breakpoints.tablet.media} {
    flex-direction: row-reverse;
    padding: 20px 76px 20px 20px;
    width: 704px;
    border-radius: 40px;
  }

  @media ${theme.breakpoints.desktop.media} {
    width: 395px;
    height: 520px;
    padding: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  letter-spacing: 0.04em;
  line-height: 1.35;
  //margin-bottom: 18px;

  @media ${theme.breakpoints.tablet.media} {
    font-size: 28px;
    color: #111111;
    //margin: 60px 0px 24px;
  }
`;

export const UserDiv = styled.div`
  background-color: #fef9f9;

  @media ${theme.breakpoints.desktop.media} {
    display: flex;
    gap: 32px;
  }
`;
