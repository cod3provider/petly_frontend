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
    NoticeCategoryItemHeartIcon,
    NoticeCategoryItemFillHeartIcon,
    NoticeCategoryItemButtonList,
    NoticeCategoryItemTrashIcon,
    NoticeCategoryItemButtonItem
} from "./NoticeCategoryItem.styled";

import { useDispatch } from 'react-redux';

import { addFavorite, removeFavorite } from '../../../redux/notices/noticesOperations';

import { useState, useEffect } from 'react';


const NoticeCategoryItem = ({ data, openModal, openDeleteModal, user, isLoggedIn }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();

    const checkFavorite = (user, id) => {
        if (user.favorite) {
            for (let i = 0; i < user.favorite.length; i++) {
                if (user.favorite[i]._id === id) {
                    return true; 
                }
            }
        }
        return false; 
    }

    useEffect(() => {
        setIsFavorite(checkFavorite(user, data._id));
    }, [user, data]);

    const handleFavoriteBtnClick = () => {
        if (isLoggedIn) {
            const fetchAddFavorite = async (id) => {
                try {
                    console.log("adding");
                    const response = await dispatch(addFavorite(id));
                    console.log(response);
                    if (response.type === '/addFavorite/fulfilled') {
                        setIsFavorite(true);
                    }

                }
                catch (error) {
                    console.log(error);
                    alert(error.message);
                }
            }
            const fetchRemoveFavorite = async (id) => {
                try {
                    console.log("removing");
                    const response = await dispatch(removeFavorite(id));
                    console.log(response);
                    if (response.type === '/removeFavorite/fulfilled') {
                        setIsFavorite(false);
                    }
                }
                catch (error) {
                    alert(error.message);
                }
            }
            if (isFavorite) {
                fetchRemoveFavorite(data._id);
            }
            else {
                fetchAddFavorite(data._id);
            }
        }
    }

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
            <NoticeCategoryItemButtonList>
                <NoticeCategoryItemButtonItem>
                    <NoticeCategoryItemFavoriteButton type='button' onClick={handleFavoriteBtnClick}>
                        {isFavorite ? <NoticeCategoryItemFillHeartIcon /> : <NoticeCategoryItemHeartIcon />}
                    </NoticeCategoryItemFavoriteButton>
                </NoticeCategoryItemButtonItem>
                {data.owner === user._id && <NoticeCategoryItemButtonItem>
                    <NoticeCategoryItemFavoriteButton type='button' onClick={()=>openDeleteModal(data)}>
                        <NoticeCategoryItemTrashIcon />
                    </NoticeCategoryItemFavoriteButton>
                </NoticeCategoryItemButtonItem>}
            </NoticeCategoryItemButtonList>
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
                    {data.sex === "female" ? <NoticeCategoryItemFemaleIcon /> : <NoticeCategoryItemMaleIcon />}
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
    openDeleteModal: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
}

export default NoticeCategoryItem;