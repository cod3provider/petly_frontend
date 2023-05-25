import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import { IoCloseOutline } from 'react-icons/io5';
import { FiTrash2 } from 'react-icons/fi';

export const NoticesDeleteModalCloseIcon= styled(IoCloseOutline)`
    color: ${theme.baseColors.accentColor};
    width: 24px;
    height: 24px;
`;

export const NoticesDeleteModalOverlay= styled.div`
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

export const NoticesDeleteModalModal= styled.div`
    position: relative;
    width: 280px;
    padding: 60px 12px;
    background: #FFFFFF;
    border-radius: 20px;

    @media(${theme.breakpoints.tablet.media}){
        width: 608px;
        padding: 60px 105px;
    }

    @media(${theme.breakpoints.desktop.media}){
        width: 608px;
        padding: 60px 105px;
    }
`;

export const NoticesDeleteModalCloseButton= styled.button`
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
        top: 24px;
        right: 24px;
    }

    @media(${theme.breakpoints.desktop.media}){
        top: 24px;
        right: 24px;
    }
`;

export const NoticesDeleteModalTrashIcon = styled(FiTrash2)`
    color: ${theme.baseColors.buttonTextColor};
    width: 24px;
    height: 24px;
    margin-left: 8px;
`;

export const NoticesDeleteModalTitle = styled.h2`
    font-weight: 700;
    font-size: ${theme.fontSizes.l};
    line-height: 33px;
    text-align: center;
    letter-spacing: 0.04em;
    color: ${theme.baseColors.textColor};

    @media(${theme.breakpoints.tablet.media}){
        font-size: ${theme.fontSizes.lx};
        line-height: 38px;
        letter-spacing: -0.01em;
        color: ${theme.baseColors.titleColor};
    }

    @media(${theme.breakpoints.desktop.media}){
        font-size: ${theme.fontSizes.lx};
        line-height: 38px;
        letter-spacing: -0.01em;
        color: ${theme.baseColors.titleColor};
    }
`;

export const NoticesDeleteModalText = styled.p`
    margin: 14px auto 0;
    font-weight: 500;
    font-size: ${theme.fontSizes.s};
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.01em;
    color: ${theme.baseColors.textColor};

    @media(${theme.breakpoints.tablet.media}){
        margin: 40px 0 0;
        padding-left: 5px;
        font-size: 16px;
        line-height: 22px;
    }

    @media(${theme.breakpoints.desktop.media}){
        margin: 40px 0 0;
        padding-left: 5px;
        font-size: 16px;
        line-height: 22px;
    }
`;

export const NoticesDeleteModalYesButton = styled.button`
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

    &:hover,
    &:focus{
        background: ${theme.baseColors.buttonHoverBgColor};
    }

    @media(${theme.breakpoints.tablet.media}){
        width: 129px;
    }

    @media(${theme.breakpoints.desktop.media}){
        width: 129px;
    }
`;

export const NoticesDeleteModalCancelButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 256px;
    border: 2px solid ${theme.baseColors.accentButtonColor};
    border-radius: 40px;
    color: ${theme.baseColors.accentButtonColor};
    background: #ffffff;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: ${theme.transition.color};
    transition: border-color 250ms linear;

    &:hover,
    &:focus{
        color: #9BD0FF;
        border-color: #9BD0FF;
    }

    @media(${theme.breakpoints.tablet.media}){
        width: 129px;
    }

    @media(${theme.breakpoints.desktop.media}){
        width: 129px;
    }
`;

export const NoticesDeleteModalButtonItem = styled.li`
    margin-top: 8px;
    display: flex;
    align-items: center;

    &:first-child{
        margin-top: 0;
    }

    @media(${theme.breakpoints.tablet.media}){
        margin-top: 0;
        margin-left: 17px;

        &:first-child{
            margin-left: 0;
        }
    }

    @media(${theme.breakpoints.desktop.media}){
        margin-top: 0;
        margin-left: 17px;

        &:first-child{
            margin-left: 0;
        }
    }
`;

export const NoticesDeleteModalButtonList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 44px;

    @media(${theme.breakpoints.tablet.media}){
        flex-direction: row;
        margin-top: 48px;
    }

    @media(${theme.breakpoints.desktop.media}){
        flex-direction: row;
        margin-top: 48px;
    }
`;