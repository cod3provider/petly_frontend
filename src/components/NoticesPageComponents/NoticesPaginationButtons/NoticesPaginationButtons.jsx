import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from "./NoticesPaginationButtons.module.css"

import {
    NoticesPaginationList, NoticesPaginationIconRight,
    NoticesPaginationIconLeft, NoticesPaginationPageButton,
    NoticesPaginationArrowButton, NoticesPaginationItem
} from "./NoticesPaginationButtons.styled"

const NoticesPaginationButtons = ({ currentPage, totalPages, onPageChange }) => {
    const [startPage, setStartPage] = useState(1);
    
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);

            if (currentPage === startPage + 1 && startPage > 1) {
                setStartPage(startPage - 1);
            }
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);

            if (currentPage === startPage + 3 && startPage + 3 < totalPages) {
            setStartPage(startPage + 1);
            }
        }
    };

    const renderPageButtons = () => {
        const pageButtons = [];

        for (let i = startPage; i <= startPage + 3 && i <= totalPages; i++) {
            pageButtons.push(
                <NoticesPaginationItem key={i}>
                    <NoticesPaginationPageButton
                        
                        className={i === currentPage ? styles.button+' active' : styles.button}
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </NoticesPaginationPageButton>
                </NoticesPaginationItem>
            );
        }

        return pageButtons;
    };

    return <NoticesPaginationList>
        <NoticesPaginationItem>
            <NoticesPaginationArrowButton onClick={handlePreviousPage}>
                <NoticesPaginationIconLeft/>
            </NoticesPaginationArrowButton>
        </NoticesPaginationItem>
        {renderPageButtons()}
        <NoticesPaginationItem>
            <NoticesPaginationArrowButton onClick={handleNextPage}>
                <NoticesPaginationIconRight/>
            </NoticesPaginationArrowButton>
        </NoticesPaginationItem>
    </NoticesPaginationList>;
}

NoticesPaginationButtons.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
}

export default NoticesPaginationButtons;