import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const NoticesContainer= styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 100px;
    padding-top: 40px;

    @media(${theme.breakpoints.tablet.media}){
        padding-top: 80px;
    }

    @media(${theme.breakpoints.desktop.media}){
        padding-top: 80px;
    }
`;

export const NoticesContentBox= styled.div`
    // position: relative;
`;

export const NoticesNavBox= styled.div`
    display: flex;
    justify-content: space-between;
    margin-top:20px;

    @media(${theme.breakpoints.tablet.media}){
        margin-top: 40px;
    }

    @media(${theme.breakpoints.desktop.media}){
        margin-top: 40px;
        width: 1248px;
    }
`;