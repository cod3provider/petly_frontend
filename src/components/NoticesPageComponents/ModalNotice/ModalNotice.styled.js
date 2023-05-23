import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import { IoCloseOutline } from 'react-icons/io5';
import { FiHeart } from 'react-icons/fi';

export const ModalNoticeCloseIcon= styled(IoCloseOutline)`
    color: ${theme.baseColors.accentColor};
    width: 24px;
    height: 24px;
`;

export const ModalNoticeOverlay= styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(97, 97, 97, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`;

export const ModalNoticeModal= styled.div`
    position: relative;
    width: 280px;
    padding: 44px 12px 16px;
    background: #FFFFFF;
    border-radius: 20px;

    @media(${theme.breakpoints.tablet.media}){
        width: 681px;
        padding: 32px 32px 24px;
    }

    @media(${theme.breakpoints.desktop.media}){
        width: 681px;
        padding: 32px 32px 24px;
    }
`;

export const ModalNoticeCloseButton= styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    padding: 0;
    top: 12px;
    right: 12px;
    &:focus{
        outline: none;
    }

    @media(${theme.breakpoints.tablet.media}){
        top: 23px;
        right: 26px;
    }

    @media(${theme.breakpoints.desktop.media}){
        top: 23px;
        right: 26px;
    }
`;

export const ModalNoticePhotoContainer= styled.div`
    position: relative;
    padding-right: 8px;
    padding-left: 8px;
    margin-bottom: 12px;

    @media(${theme.breakpoints.tablet.media}){
        padding: 0;
        margin-right: 24px;
        margin-bottom: 0px;
    }

    @media(${theme.breakpoints.desktop.media}){
        padding: 0;
        margin-right: 24px;
        margin-bottom: 0px;
    }
`;

export const ModalNoticePhoto= styled.img`
    border-radius: 0px 0px 40px 40px;
    overflow: hidden;
    width: 240px;
    height: 240px;

    @media(${theme.breakpoints.tablet.media}){
        width: 262px;
        height: 298px;
    }
    @media(${theme.breakpoints.desktop.media}){
        width: 262px;
        height: 298px;
    }
`;

export const ModalNoticeCategoryContainer= styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 16px;
    width: 126px;
    height: 32px;
    background-color: ${theme.baseColors.labelBgColor};
    border-radius: 0px 16px 16px 0px;
`;

export const ModalNoticeCategoryText= styled.p`
    font-weight: 500;
    font-size: ${theme.fontSizes.s};
    line-height: 19px;
    leading-trim: both;
    text-edge: cap;
    color: ${theme.baseColors.textColor};
`;

export const ModalNoticeTitle = styled.h2`
    width: 198px;
    text-align: left;
    font-size: ${theme.fontSizes.s};
    font-weight: 700;
    font-size: ${theme.fontSizes.l};
    line-height: 33px;
    letter-spacing: -0.01em;
    color: ${theme.baseColors.titleColor};

    @media(${theme.breakpoints.tablet.media}){
        width: 321px;
        font-size: ${theme.fontSizes.lx};
        line-height: 38px;
    }
    @media(${theme.breakpoints.desktop.media}){
        width: 321px;
        font-size: ${theme.fontSizes.lx};
        line-height: 38px;
    }
`;

export const ModalNoticeList = styled.dl`
    margin-top: 20px;
    margin-bottom: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px 0px;
`;

export const ModalNoticeListTitle = styled.dt`
    display: flex;
    align-items: center;
    flex-basis: 81px;
    text-align: left;
    font-weight: 600;
    font-size: ${theme.fontSizes.s};
    line-height: 19px;
    color: ${theme.baseColors.titleColor};

    @media(${theme.breakpoints.tablet.media}){
        flex-basis: 120px;
        font-size: 16px;
        line-height: 22px;
    }

    @media(${theme.breakpoints.desktop.media}){
        flex-basis: 120px;
        font-size: 16px;
        line-height: 22px;
    }
`;

export const ModalNoticeListDetails = styled.dd`
    display: flex;
    align-items: center;
    flex-basis: 175px;
    margin-left: 0;
    text-align: left;
    font-weight: 500;
    font-size: ${theme.fontSizes.xs};
    line-height: 16px;
    color: ${theme.baseColors.titleColor};

    @media(${theme.breakpoints.tablet.media}){
        font-size: 16px;
        line-height: 22px;
    }

    @media(${theme.breakpoints.desktop.media}){
        font-size: 16px;
        line-height: 22px;
    }
`;

export const ModalNoticeComment = styled.p`
    margin-top: 12px;
    text-align: left;
    font-weight: 600;
    font-size: ${theme.fontSizes.s};
    line-height: 19px;
    color: ${theme.baseColors.titleColor};
    letter-spacing: 0.04em;

    @media(${theme.breakpoints.tablet.media}){
        margin-top: 28px;
        font-size: 16px;
        line-height: 24px;
    }

    @media(${theme.breakpoints.desktop.media}){
        margin-top: 28px;
        font-size: 16px;
        line-height: 24px;
    }
`;

export const ModalNoticeButtonList = styled.ul`
    margin-top: 12px;
    display: flex;
    flex-direction: column;

    @media(${theme.breakpoints.tablet.media}){
        flex-direction: row-reverse;
        justify-content: end;
        margin-top: 70px;
    }

    @media(${theme.breakpoints.desktop.media}){
        flex-direction: row-reverse;
        justify-content: end;
        margin-top: 70px;
    }
`;

export const ModalNoticePhoneLink = styled.a`
    display: flex;
    width: 256px;
    justify-content: center;
    align-items: center;
    height: 40px;
    border: 2px solid ${theme.baseColors.accentButtonColor};
    border-radius: 40px;
    color: ${theme.baseColors.accentButtonColor};
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.04em;

    @media(${theme.breakpoints.tablet.media}){
        width: 129px;
    }

    @media(${theme.breakpoints.desktop.media}){
        width: 129px;
    }
`;

export const ModalNoticeFavoriteButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 256px;
    background: ${theme.baseColors.accentButtonColor};
    border-radius: 40px;
    color: ${theme.baseColors.buttonTextColor};
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.04em;
    cursor: pointer;

    @media(${theme.breakpoints.tablet.media}){
        width: 129px;
    }

    @media(${theme.breakpoints.desktop.media}){
        width: 129px;
    }
`;

export const ModalNoticeHeartIcon = styled(FiHeart)`
    margin-left: 8px;
    color: ${theme.baseColors.buttonTextColor};
    width: 24px;
    height: 24px;
`;

export const ModalNoticeButtonItem = styled.li`
    margin-top: 8px;
    display: flex;
    align-items: center;

    &:first-child{
        margin-top: 0;
    }

    @media(${theme.breakpoints.tablet.media}){
        margin-top: 0;
        margin-left: 17px;

        &:last-child{
            margin-left: 0;
        }
    }

    @media(${theme.breakpoints.desktop.media}){
        margin-top: 0;
        margin-left: 17px;

        &:last-child{
            margin-left: 0;
        }
    }
`;

export const ModalNoticePhotoListContainer = styled.div`
    @media(${theme.breakpoints.tablet.media}){
        display: flex;
    }

    @media(${theme.breakpoints.desktop.media}){
        display: flex;
    }
`;