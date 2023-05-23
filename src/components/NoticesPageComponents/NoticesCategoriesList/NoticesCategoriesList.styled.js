import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const NoticesCategoriesListList= styled.ul`
    margin-top: 24px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px 32px;

    @media(${theme.breakpoints.tablet.media}){
        grid-template-columns: 1fr 1fr;
    }

    @media(${theme.breakpoints.desktop.media}){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;