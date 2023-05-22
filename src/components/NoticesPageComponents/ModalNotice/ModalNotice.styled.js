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
    // height: 786px;
    padding: 44px 12px 16px;
    background: #FFFFFF;
    border-radius: 20px;
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
`;

export const ModalNoticePhotoContainer= styled.div`
    position: relative;
    padding-right: 8px;
    padding-left: 8px;
`;

export const ModalNoticePhoto= styled.img`
    border-radius: 0px 0px 40px 40px;
    overflow: hidden;
    width: 240px;
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
    margin-top: 12px;
    width: 198px;
    text-align: left;
    font-size: ${theme.fontSizes.s};
    font-weight: 700;
    font-size: ${theme.fontSizes.l};
    line-height: 33px;
    letter-spacing: -0.01em;
    color: ${theme.baseColors.titleColor};
`;

export const ModalNoticeList = styled.dl`
    margin-top: 20px;
    margin-bottom: 0;
    display: flex;
    flex-wrap: wrap;
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
`;

export const ModalNoticeComment = styled.p`
    margin-top: 12px;
    text-align: left;
    font-weight: 600;
    font-size: ${theme.fontSizes.s};
    line-height: 19px;
    color: ${theme.baseColors.titleColor};
    letter-spacing: 0.04em;
`;

export const ModalNoticeButtonList = styled.p`
    margin-top: 12px;
    display: flex;
    flex-direction: column;
`;

export const ModalNoticePhoneLink = styled.a`
    display: flex;
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
`;

export const ModalNoticeHeartIcon = styled(FiHeart)`
    margin-left: 8px;
    color: ${theme.baseColors.buttonTextColor};
    width: 24px;
    height: 24px;
`;

export const ModalNoticeButtonItem = styled.li`
    margin-top: 8px;

    &:first-child{
        margin-top: 0;
    }
`;