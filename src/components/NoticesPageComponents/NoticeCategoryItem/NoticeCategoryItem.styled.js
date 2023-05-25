import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiHeart, FiTrash2 } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { RxClock } from 'react-icons/rx';
import { BsGenderFemale, BsGenderMale} from 'react-icons/bs';


export const NoticeCategoryItemItem= styled.li`
    width: 280px;
    box-shadow: 3px 8px 14px 0px #88C6FD30;
    border-radius: 0px 0px 40px 40px;
    overflow: hidden;

    @media(${theme.breakpoints.tablet.media}){
        width: 336px;
    }

    @media(${theme.breakpoints.desktop.media}){
        width: 288px;
    }
`;

export const NoticeCategoryItemPhotoContainer= styled.div`
    position: relative;
    height: 288px;
    overflow: hidden;
`;

export const NoticeCategoryItemCategoryContainer= styled.div`
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

export const NoticeCategoryItemFavoriteButton= styled.button`
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #C5DFF6;
    transition: ${theme.transition.bg};

    &:focus{
        outline: none;
    }
    &:hover,
    &:focus{
        background: #9BD0FF;
    }
`;

export const NoticeCategoryItemInfoList= styled.ul`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 12px;
    left: 8px;

    @media(${theme.breakpoints.tablet.media}){
        left: 24px;
    }

    @media(${theme.breakpoints.desktop.media}){
        left: 12px;
    }
`;

export const NoticeCategoryItemInfoItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.baseColors.labelBgColor};
    margin-left: 12px;
    padding: 2px 4px;
    width:80px;
    height: 28px;
    border-radius: 16px;

    &:first-child{
        margin-left: 0;
    }

    @media(${theme.breakpoints.tablet.media}){
        margin-left: 24px;
    }

    @media(${theme.breakpoints.desktop.media}){
        margin-left: 12px;
    }
`;

export const NoticeCategoryItemInfoText = styled.p`
    margin-left: 4px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: ${theme.baseColors.textColor};

`;

export const NoticeCategoryItemCategoryText = styled.p`
    font-weight: 500;
    font-size: ${theme.fontSizes.s};
    line-height: 19px;
    leading-trim: both;
    text-edge: cap;
    color: ${theme.baseColors.textColor};

`;

export const NoticeCategoryItemTitleContainer = styled.div`
    padding: 20px 16px 24px;
    background-color: #ffffff;
`;

export const NoticeCategoryItemTitle = styled.h2`
    width: 231px;
    margin-left: 4px;
    text-align: left;
    font-weight: 700;
    font-size: ${theme.fontSizes.l};
    line-height: 33px;
    color: ${theme.baseColors.textColor};
`;

export const NoticeCategoryItemMoreButton = styled.button`
    margin-top: 20px;
    padding: 8px 20px;
    min-width: 248px;
    border: 2px solid ${theme.baseColors.accentButtonColor};
    border-radius: 40px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;
    color: ${theme.baseColors.accentButtonColor};
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    transition: ${theme.transition.color};
    transition: border-color 250ms linear;

    &:hover,
    &:focus{
        border-color: #9BD0FF;
        color: #9BD0FF;
    }
`;

export const NoticeCategoryItemLocationIcon = styled(HiOutlineLocationMarker)`
    color: ${theme.baseColors.accentColor};
    width: 24px;
    height: 24px;
`;

export const NoticeCategoryItemClockIcon = styled(RxClock)`
    color: ${theme.baseColors.accentColor};
    width: 24px;
    height: 24px;
`;

export const NoticeCategoryItemFemaleIcon = styled(BsGenderFemale)`
    color: ${theme.baseColors.accentColor};
    width: 24px;
    height: 24px;
`;

export const NoticeCategoryItemMaleIcon = styled(BsGenderMale)`
    color: ${theme.baseColors.accentColor};
    width: 24px;
    height: 24px;
`;

export const NoticeCategoryItemHeartIcon = styled(FiHeart)`
    color: ${theme.baseColors.accentColor};
    width: 24px;
    height: 24px;
`;

export const NoticeCategoryItemFillHeartIcon = styled(FaHeart)`
    color: ${theme.baseColors.accentColor};
    width: 24px;
    height: 24px;
`;

export const NoticeCategoryItemTrashIcon = styled(FiTrash2)`
    color: ${theme.baseColors.accentColor};
    width: 24px;
    height: 24px;
`;

export const NoticeCategoryItemButtonList = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 12px;
    right: 12px;
`;

export const NoticeCategoryItemButtonItem = styled.li`
    margin-top: 16px;

    &:first-child{
        margin-top: 0;
    }
`;
