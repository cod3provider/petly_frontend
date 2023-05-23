import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";

export const NoticesPaginationList= styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 280px;
    height: 52px;
    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 45px;
    background: #FEF9F9;
    margin-left: auto;
    margin-right: auto;

    @media(${theme.breakpoints.tablet.media}){
        width: 310px;
    }

    @media(${theme.breakpoints.desktop.media}){
        width: 310px;
    }
`;

export const NoticesPaginationIconRight= styled(HiOutlineArrowNarrowRight)`
    width: 24px;
    height: 24px;
    color: ${theme.baseColors.accentButtonColor}
`;

export const NoticesPaginationIconLeft= styled(HiOutlineArrowNarrowLeft)`
    width: 24px;
    height: 24px;
    color: ${theme.baseColors.accentButtonColor}
`;

export const NoticesPaginationArrowButton = styled.button`
    padding: 0;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid ${theme.baseColors.filterNonActiveBgColor};

    &:focus,
    &:hover{
        outline: none;
    }
`;

export const NoticesPaginationPageButton = styled.button`
    padding: 0;
    width: 35px;
    height: 35px;
    border: 1px solid ${theme.baseColors.filterNonActiveBgColor};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${theme.baseColors.filterNonActiveBgColor};

    &:focus,
    &:hover{
        outline: none;
        color: ${theme.baseColors.buttonTextColor};
        background: ${theme.baseColors.accentButtonColor};
        border: none;
    }
`;

export const NoticesPaginationItem = styled.li`
    margin-left: 8px;

    &:first-child{
        margin: 0;
    }
`;