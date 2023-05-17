import PropTypes from 'prop-types';
import {
    NoticeCategoryItemItem,
    NoticeCategoryItemPhotoContainer,
    NoticeCategoryItemCategoryContainer,
    NoticeCategoryItemFavoriteButton,
    NoticeCategoryItemInfoList,
    NoticeCategoryItemInfoItem,
    NoticeCategoryItemInfoText,
    NoticeCategoryItemCategoryText,
    NoticeCategoryItemTitleContainer,
    NoticeCategoryItemTitle,
    NoticeCategoryItemMoreButton,
    NoticeCategoryItemLocationIcon,
    NoticeCategoryItemClockIcon,
    NoticeCategoryItemFemaleIcon,
    NoticeCategoryItemMaleIcon,
    NoticeCategoryItemHeartIcon
} from "./NoticeCategoryItem.styled"

const NoticeCategoryItem = ({ data, openModal }) => {
    return <NoticeCategoryItemItem>
        <NoticeCategoryItemPhotoContainer>
            <img src={data.imageUrl} alt="pet photo" />
            <NoticeCategoryItemCategoryContainer>
                <NoticeCategoryItemCategoryText>{data.category}</NoticeCategoryItemCategoryText>
            </NoticeCategoryItemCategoryContainer>
            <NoticeCategoryItemFavoriteButton type='button'>
                <NoticeCategoryItemHeartIcon></NoticeCategoryItemHeartIcon>
            </NoticeCategoryItemFavoriteButton>
            <NoticeCategoryItemInfoList>
                <NoticeCategoryItemInfoItem>
                    <NoticeCategoryItemLocationIcon></NoticeCategoryItemLocationIcon>
                    <NoticeCategoryItemInfoText>{data.location}</NoticeCategoryItemInfoText>
                </NoticeCategoryItemInfoItem>
                <NoticeCategoryItemInfoItem>
                    <NoticeCategoryItemClockIcon></NoticeCategoryItemClockIcon>
                    <NoticeCategoryItemInfoText>{data.age}</NoticeCategoryItemInfoText>
                </NoticeCategoryItemInfoItem>
                <NoticeCategoryItemInfoItem>
                    {data.sex==="female"?<NoticeCategoryItemFemaleIcon/>:<NoticeCategoryItemMaleIcon/>}
                    <NoticeCategoryItemInfoText>{data.sex}</NoticeCategoryItemInfoText>
                </NoticeCategoryItemInfoItem>
            </NoticeCategoryItemInfoList>
        </NoticeCategoryItemPhotoContainer>
        <NoticeCategoryItemTitleContainer>
            <NoticeCategoryItemTitle>{data.title}</NoticeCategoryItemTitle>
            <NoticeCategoryItemMoreButton type='button' onClick={() => openModal(data)}>Learn more</NoticeCategoryItemMoreButton>
        </NoticeCategoryItemTitleContainer>
    </NoticeCategoryItemItem>;
}

NoticeCategoryItem.propTypes = {
    data: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired,
}

export default NoticeCategoryItem;