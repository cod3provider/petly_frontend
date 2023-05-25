import PropTypes from 'prop-types';
import {
    ModalNoticeCloseIcon, ModalNoticeOverlay, ModalNoticeModal,
    ModalNoticeCloseButton, ModalNoticeCategoryContainer,
    ModalNoticePhotoContainer, ModalNoticeCategoryText,
    ModalNoticeTitle, ModalNoticeList,
    ModalNoticeListTitle, ModalNoticeListDetails,
    ModalNoticePhoto, ModalNoticeComment, ModalNoticeButtonList,
    ModalNoticeHeartIcon, ModalNoticePhoneLink, ModalNoticeFavoriteButton,
    ModalNoticeButtonItem, ModalNoticePhotoListContainer
} from "./ModalNotice.styled";
import { addNoticeToFavorite, removeNoticeFromFavorite } from "../../../services/noticesApi";
import { useState, useEffect } from 'react';
import React from 'react';


const ModalNotice = ({ details, close, isLoggedIn, user }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const checkFavorite = (user, id) => {
        for (let i = 0; i < user.favorite.length; i++) {
            if (user.favorite[i]._id === id) {
                return true; 
            }
        }
        return false; 
    }

    if (checkFavorite(user, details._id)) {
        setIsFavorite(true);
    }
    
    const handleFavoriteBtnClick = (isLoggedIn, isFavorite) => {
        if (isLoggedIn) {
            const fetchAddFavorite = async (id) => {
                try {
                    const response = await addNoticeToFavorite(id);
                    console.log(response);
                    alert(response.message);
                    setIsFavorite(true);
                }
                catch (error) {
                    alert(error.message);
                }
            }
            const fetchRemoveFavorite = async (id) => {
                try {
                    const response = await removeNoticeFromFavorite(id);
                    alert(response.message);
                    setIsFavorite(false);
                }
                catch (error) {
                    alert(error.message);
                }
            }
            if (isFavorite) {
                fetchRemoveFavorite(details._id);
            }
            else {
                fetchAddFavorite(details._id);
            }
        }
    }

    const getBirthday = (dateStr) => {
        const date = new Date(dateStr);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (day < 10) {
            day = '0' + day;
        }

        if (month < 10) {
            month = '0' + month;
        }
        return day + '.' + month + '.' + year;
    }
    const birthday = getBirthday(details.birthday);

    return <ModalNoticeOverlay>
        <ModalNoticeModal>
            <ModalNoticeCloseButton type='button' onClick={close}>
                <ModalNoticeCloseIcon></ModalNoticeCloseIcon>
            </ModalNoticeCloseButton>
            <ModalNoticePhotoListContainer>
                <ModalNoticePhotoContainer>
                    <ModalNoticePhoto src={details.noticeImage} alt="pet photo" />
                    <ModalNoticeCategoryContainer>
                        <ModalNoticeCategoryText>{details.category}</ModalNoticeCategoryText>
                    </ModalNoticeCategoryContainer>
                </ModalNoticePhotoContainer>
                <div>
                    <ModalNoticeTitle>{details.title}</ModalNoticeTitle>
                    <ModalNoticeList>
                        <ModalNoticeListTitle>Name:</ModalNoticeListTitle>
                        <ModalNoticeListDetails>{details.name}</ModalNoticeListDetails>
                        <ModalNoticeListTitle>Birthday:</ModalNoticeListTitle>
                        <ModalNoticeListDetails>{birthday}</ModalNoticeListDetails>
                        <ModalNoticeListTitle>Breed:</ModalNoticeListTitle>
                        <ModalNoticeListDetails>{details.breed}</ModalNoticeListDetails>
                        <ModalNoticeListTitle>Place:</ModalNoticeListTitle>
                        <ModalNoticeListDetails>{details.location}</ModalNoticeListDetails>
                        <ModalNoticeListTitle>The sex:</ModalNoticeListTitle>
                        <ModalNoticeListDetails>{details.sex}</ModalNoticeListDetails>
                        <ModalNoticeListTitle>Email:</ModalNoticeListTitle>
                        <ModalNoticeListDetails>
                            <a href={`mailto:${details.email}`} >{details.email}</a>
                        </ModalNoticeListDetails>
                        <ModalNoticeListTitle>Phone:</ModalNoticeListTitle>
                        <ModalNoticeListDetails>
                            <a href={`tel:${details.phone}`} >{details.phone}</a>
                        </ModalNoticeListDetails>
                    </ModalNoticeList>
                </div>    
            </ModalNoticePhotoListContainer>
            <ModalNoticeComment>Comments: {details.comment}</ModalNoticeComment>
            <ModalNoticeButtonList>
                <ModalNoticeButtonItem>
                    <ModalNoticePhoneLink href={`tel:${details.phone}`}>Contact</ModalNoticePhoneLink>
                </ModalNoticeButtonItem>
                <ModalNoticeButtonItem>
                    <ModalNoticeFavoriteButton type='button' onClick={handleFavoriteBtnClick}>
                        {!isFavorite ? (
                                <React.Fragment>
                                    Add to <ModalNoticeHeartIcon />
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    Remove from <ModalNoticeHeartIcon />
                                </React.Fragment>
                            )
                        }
                    </ModalNoticeFavoriteButton> 
                </ModalNoticeButtonItem>
            </ModalNoticeButtonList>
        </ModalNoticeModal>
    </ModalNoticeOverlay>;
}

ModalNotice.propTypes = {
    details: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
}

export default ModalNotice;