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
} from "./NoticeCategoryItem.styled";


const NoticeCategoryItem = ({ data, openModal }) => {
    const getAge = (birthday) => {
        const currentDate = new Date();
        const birthdayDate = new Date(birthday);
        const timeDifference = currentDate.getTime() - birthdayDate.getTime();
        // Розрахунок різниці у роках
        const yearsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));

        if (yearsDifference > 1) {
            return yearsDifference + " years";
        }

        if (yearsDifference === 1) {
            return yearsDifference + " year";
        }

        // Розрахунок різниці у місяцях
        var monthsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));

        if (monthsDifference > 1) {
            return monthsDifference + " months";
        }

        if (monthsDifference === 1) {
            return monthsDifference + " month";
        }

        // Розрахунок різниці у днях
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        return daysDifference + " days";
    }
    
    const age = getAge(data.birthday);

    return <NoticeCategoryItemItem>
        <NoticeCategoryItemPhotoContainer>
            <img src={data.noticeImage} alt="pet photo" />
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
                    <NoticeCategoryItemInfoText>{age}</NoticeCategoryItemInfoText>
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