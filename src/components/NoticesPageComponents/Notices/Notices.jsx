import NoticesSearch from "../NoticesSearch/NoticesSearch";
import NoticesFilters from "../NoticesFilters/NoticesFilters";
import NoticesCategoriesNav from "../NoticesCategoriesNav/NoticesCategoriesNav";
import NoticesCategoriesList from "../NoticesCategoriesList/NoticesCategoriesList";
import AddPetButton from "../AddPetButton/AddPetButton";
import NoticesTitle from "../NoticesTitle/NoticesTitle";
import ModalNotice from "../ModalNotice/ModalNotice";
import NoticesPaginationButtons from "../NoticesPaginationButtons/NoticesPaginationButtons";
import { NoticesContainer, NoticesContentBox } from "../NoticesContainers/NoticesContainers.styled";

import { searchNoticesByName, searchNoticesByCategory } from "../../../services/noticesApi";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NoticesPage = () => {
    const { categoryName } = useParams();

    let category;

    switch (categoryName) {
        case "sell":
            category = "sell";
            break;
        case "lost-found":
            category = "lostFound";
            break;
        case "for-free":
            category = "inGoodHands";
            break;
        default:
            category = null;
    }
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState(null);
    const [query, setQuery] = useState('');
    const [notices, setNotices] = useState([]);
    const [page, setPage] = useState(1);

    const searchNotices = (query) => {
        setQuery(query);
    }

    useEffect(() => {
        const fetchNoticesByName = async (category, query, page) => {
            try {
                const data = await searchNoticesByName(category, query, page);
                setNotices(data);
            }
            catch (error) {
                alert(error.message);
            }
        }
        if (query !== '') {
            fetchNoticesByName(category);
        }
    }, [query, category, page]);

    useEffect(() => {
        const fetchNoticesByCategory = async (category, page) => {
            try {
                const data = await searchNoticesByCategory(category, page);
                setNotices(data);
            }
            catch (error) {
                alert(error.message);
            }
        }
        fetchNoticesByCategory(category, page);
    }, [category, page]);

    const openModal = (data) => {
        setIsModalOpen(true);
        setModalInfo({ ...data});
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setModalInfo(null);
    };

    return <main>
        <NoticesContainer>
                <NoticesContentBox>
                <NoticesTitle />
                <AddPetButton isAuth={true} />
                <NoticesSearch onSubmit={searchNotices} />
                <NoticesCategoriesNav/>
                <NoticesCategoriesList items={notices} openModal={openModal} />
                <NoticesPaginationButtons currentPage={page} totalPages={5} onPageChange={setPage}/>
                {isModalOpen && <ModalNotice close={closeModal} details={modalInfo} />}
            </NoticesContentBox>
        </NoticesContainer>
            
    </main>;
}

export default NoticesPage;