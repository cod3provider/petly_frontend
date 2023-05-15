import styled from 'styled-components';
import { theme } from '../../utils/theme';
import { NavLink } from 'react-router-dom';

export const WrapperPet = styled.div`
  @media ${theme.breakpoints.mobile.media} {
    display: block;
    align-items: center;
    width: 280px;
    height: 496px;
    text-align: center;
    padding: 20px 8px 16px 8px;
    background: #ffffff;
    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 40px;
  }
`;

export const TitlePet = styled.h1`
  @media ${theme.breakpoints.mobile} {
    display: block;
    text-align: left;
    margin: 20px 24px auto 20px;
    font-size: 20px;
    line-height: 1.35;
    color: #111111;
    /* width: ${theme.breakpoints.mobile.width}; */
  }
`;
export const WrapperStep = styled.div`
  @media ${theme.breakpoints.mobile} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Textstep = styled.p`
  @media ${theme.breakpoints.mobile} {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const StyledLink = styled(NavLink)`
  @media ${theme.breakpoints.mobile} {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.37;
    background-color: transparent;
    border: none;
    color: #54adff;
  }
`;
