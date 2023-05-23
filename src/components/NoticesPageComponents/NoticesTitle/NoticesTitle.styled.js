import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const NoticesMainTitle = styled.h1`
    font-weight: 700;
    font-size: ${theme.fontSizes.l};
    line-height: 33px;
    text-align: center;
    color: ${theme.baseColors.textColor};

    @media(${theme.breakpoints.tablet.media}){
        font-weight: 700;
        font-size: ${theme.fontSizes.xxl};
        line-height: 66px;
    }

    @media(${theme.breakpoints.desktop.media}){
        font-weight: 700;
        font-size: ${theme.fontSizes.xxl};
        line-height: 66px;
    }
`;