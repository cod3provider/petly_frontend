import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import { FiSearch } from 'react-icons/fi';
import { MdClear } from 'react-icons/md';



export const NoticesSearchInput= styled.input`
    width: inherit;
    padding-left: 20px;
    border:none;
    outline:none;

    &::placeholder {
        font-family: 'Inter';
        font-size: ${theme.fontSizes.s};
        line-height: 17px;
        letter-spacing: 0.04em;
        color: #888888;

        @media(${theme.breakpoints.tablet.media}){
            font-size: 20px;
            line-height: 24px;
        }

        @media(${theme.breakpoints.desktop.media}){
            font-size: 20px;
            line-height: 24px;
        }
    }
`;

export const NoticesSearchForm = styled.form`
    width: 280px;
    height: 44px;
    padding-right: 12px;
    border-radius: 24px;
    display: flex;
    overflow: hidden;
    box-shadow: 3px 8px 14px 0px #88C6FD30;
    margin-top: 24px;
    background: #ffffff;
    margin-left: auto;
    margin-right: auto;
    transition: box-shadow 250ms linear;

    &:focus,
    &:hover {
       box-shadow: 0px 4px 4px 0px #00000040; 
    }

    @media(${theme.breakpoints.tablet.media}){
        width: 608px;
        margin-top: 40px;
    }

    @media(${theme.breakpoints.desktop.media}){
        width: 608px;
        margin-top: 40px;
    }
`;

export const NoticesSearchButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    margin-left: 10px;

    &:first-child{
        margin-left: 0;
    }

    &:focus {
       outline:none;
    }
`;

export const NoticesSearchItem = styled.li`
    margin-left: 10px;

    &:first-child{
        margin-left: 0;
    }
`;

export const NoticesSearchList = styled.ul`
    display: flex;
    align-items: center;
`;

export const NoticesSearchIcon = styled(FiSearch)`
    width: 24px;
    height: 24px;
    color: ${theme.baseColors.accentButtonColor};
`;

export const NoticesSearchClearIcon = styled(MdClear)`
    width: 24px;
    height: 24px;
    color: ${theme.baseColors.accentYellow};
`;