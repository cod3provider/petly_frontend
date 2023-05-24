import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from "./NewsPagination.module.css"

import {
    NewsPaginationList, NewsPaginationIconRight,
    NewsPaginationIconLeft, NewsPaginationPageButton,
    NewsPaginationArrowButton, NewsPaginationItem
} from "./NewsPagination.styled"

const NewsPaginationButtons = ({ currentPage, totalPages, onPageChange }) => {
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
                <NewsPaginationItem key={i}>
                    <NewsPaginationPageButton
                        
                        className={i === currentPage ? styles.button+' active' : styles.button}
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </NewsPaginationPageButton>
                </NewsPaginationItem>
            );
        }

        return pageButtons;
    };

    return <NewsPaginationList>
        <NewsPaginationItem>
            <NewsPaginationArrowButton onClick={handlePreviousPage}>
                <NewsPaginationIconLeft/>
            </NewsPaginationArrowButton>
        </NewsPaginationItem>
        {renderPageButtons()}
        <NewsPaginationItem>
            <NewsPaginationArrowButton onClick={handleNextPage}>
                <NewsPaginationIconRight/>
            </NewsPaginationArrowButton>
        </NewsPaginationItem>
    </NewsPaginationList>;
}

NewsPaginationButtons.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
}

export default NewsPaginationButtons;