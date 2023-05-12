import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const WrapperPet = styled.div`
  @media ${theme.breakpoints.mobile.media} {
    display: block;
    text-align: center;
    margin-bottom: 37px;
    background: #ffffff;
    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 40px;
    width: ${theme.breakpoints.mobile.width};
  }
`;

export const TitlePet = styled.h1`
  /* ${theme.breakpoints.mobile} {
  } */
  display: block;
  margin: 20px 24px auto 20px;
  font-size: 20px;
  line-height: 1.35;
  color: #111111;
`;
