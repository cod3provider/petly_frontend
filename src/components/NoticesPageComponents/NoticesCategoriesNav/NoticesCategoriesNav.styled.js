import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import { NavLink } from 'react-router-dom';

export const NoticesCategoriesNavLink= styled(NavLink)`
    padding: 8px 16px;
    background: ${theme.baseColors.filterNonActiveBgColor};
    border-radius: 40px;
    display: inline-block;
    font-weight: 500;
    font-size: ${theme.fontSizes.s};
    line-height: 19px;
    letter-spacing: 0.04em;
    color: ${theme.baseColors.filterNonActiveTextColor};
    transition: ${theme.transition.color};
    transition: ${theme.transition.bg};
    &:focus,
    &:hover{
        color: ${theme.baseColors.filterActiveTextColor};
        background: ${theme.baseColors.buttonHoverBgColor};
    }
`;

export const NoticesCategoriesNavUl = styled.ul`
    width: 232px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 8px;

    @media(${theme.breakpoints.tablet.media}){
        width: 319px;
        gap: 12px;
    }

    @media(${theme.breakpoints.desktop.media}){
        width: 608px;
        gap: 12px;
    }
`;