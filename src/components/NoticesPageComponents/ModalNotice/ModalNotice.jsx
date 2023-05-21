import PropTypes from 'prop-types';
import {
    ModalNoticeCloseIcon, ModalNoticeOverlay, ModalNoticeModal,
    ModalNoticeCloseButton, ModalNoticeCategoryContainer,
    ModalNoticePhotoContainer, ModalNoticeCategoryText,
    ModalNoticeTitle, ModalNoticeList,
    ModalNoticeListTitle, ModalNoticeListDetails
} from "./ModalNotice.styled"

const ModalNotice = ({details, close}) => {
    return <ModalNoticeOverlay>
        <ModalNoticeModal>
            <ModalNoticeCloseButton type='button' onClick={close}>
                <ModalNoticeCloseIcon></ModalNoticeCloseIcon>
            </ModalNoticeCloseButton>
            <ModalNoticePhotoContainer>
                <img src={details.img} alt="pet photo" />
                <ModalNoticeCategoryContainer>
                    <ModalNoticeCategoryText>{details.category}</ModalNoticeCategoryText>
                </ModalNoticeCategoryContainer>
            </ModalNoticePhotoContainer>
            <div>
                <ModalNoticeTitle>{details.title}</ModalNoticeTitle>
                <ModalNoticeList>
                    <ModalNoticeListTitle>Name:</ModalNoticeListTitle>
                    <ModalNoticeListDetails>{details. name}</ModalNoticeListDetails>
                    <ModalNoticeListTitle>Birthday:</ModalNoticeListTitle>
                    <ModalNoticeListDetails>{ details.birthday}</ModalNoticeListDetails>
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
            <p>Comments:{details.comments}</p>
            <ul>
                <a href="">Contact</a>
                <button type='button'>Add to</button>
            </ul>
        </ModalNoticeModal>
    </ModalNoticeOverlay>;
}

ModalNotice.propTypes = {
    details: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired,
}

export default ModalNotice;