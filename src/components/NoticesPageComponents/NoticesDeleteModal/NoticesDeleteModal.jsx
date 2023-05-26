import PropTypes from 'prop-types';
import {
    NoticesDeleteModalCloseIcon, NoticesDeleteModalOverlay,
    NoticesDeleteModalModal, NoticesDeleteModalCloseButton,
    NoticesDeleteModalTrashIcon, NoticesDeleteModalText,
    NoticesDeleteModalTitle, NoticesDeleteModalCancelButton,
    NoticesDeleteModalYesButton, NoticesDeleteModalButtonItem,
    NoticesDeleteModalButtonList
} from "./NoticesDeleteModal.styled";


import { useDispatch } from 'react-redux';
import React from 'react';

import { deleteNotice } from '../../../redux/notices/noticesOperations';


const NoticesDeleteModal = ({ details, close, onDelete }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        const fetchDeleteNotice = async (id) => {
            try {
                const response = await dispatch(deleteNotice(id));
                console.log(response);
                onDelete();
            }
            catch (error) {
                console.log(error);
                alert(error.message);
            }
        }
        fetchDeleteNotice(details._id);
        close();
    }

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            close();
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            close();
        }
    };

    return <NoticesDeleteModalOverlay onClick={handleOverlayClick}>
        <NoticesDeleteModalModal onKeyDown={handleKeyDown}>
            <NoticesDeleteModalCloseButton type='button' onClick={close}>
                <NoticesDeleteModalCloseIcon/>
            </NoticesDeleteModalCloseButton>
            <NoticesDeleteModalTitle>Delete advertisement?</NoticesDeleteModalTitle>
            <NoticesDeleteModalText>Are you sure you want to delete {details.title}?<br/>You can't undo this action.</NoticesDeleteModalText>
            <NoticesDeleteModalButtonList>
                <NoticesDeleteModalButtonItem>
                    <NoticesDeleteModalCancelButton type='button' onClick={close}>Cancel</NoticesDeleteModalCancelButton>
                </NoticesDeleteModalButtonItem>
                <NoticesDeleteModalButtonItem>
                    <NoticesDeleteModalYesButton type='button' onClick={handleClick}>
                        Yes <NoticesDeleteModalTrashIcon/>
                    </NoticesDeleteModalYesButton>
                </NoticesDeleteModalButtonItem>
            </NoticesDeleteModalButtonList>
        </NoticesDeleteModalModal>
    </NoticesDeleteModalOverlay>;
}

NoticesDeleteModal.propTypes = {
    details: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default NoticesDeleteModal;