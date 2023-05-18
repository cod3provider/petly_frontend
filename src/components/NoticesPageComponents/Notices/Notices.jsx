import NoticesSearch from "../NoticesSearch/NoticesSearch";
import NoticesFilters from "../NoticesFilters/NoticesFilters";
import NoticesCategoriesNav from "../NoticesCategoriesNav/NoticesCategoriesNav";
import NoticesCategoriesList from "../NoticesCategoriesList/NoticesCategoriesList";
import AddPetButton from "../AddPetButton/AddPetButton";
import NoticesTitle from "../NoticesTitle/NoticesTitle";
import ModalNotice from "../ModalNotice/ModalNotice";

import { searchNoticesByName, searchNoticesByCategory } from "../../../services/noticesApi";

// import { test } from "./test";

import { useState, useEffect } from "react";

const NoticesPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState(null);
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('sell');
    const [notices, setNotices] = useState([]);

    const searchNotices = (query) => {
        setQuery(query);
    }

    useEffect(() => {
        const fetchNoticesByName = async () => {
            try {
                const data = await searchNoticesByName(query);
                setNotices(data);
            }
            catch (error) {
                alert(error.message);
            }
        }
        if (query !== '') {
            fetchNoticesByName();
        }
    }, [query]);

    useEffect(() => {
        const fetchNoticesByCategory = async (category) => {
            try {
                const data = await searchNoticesByCategory(category);
                setNotices(data);
            }
            catch (error) {
                alert(error.message);
            }
        }
            fetchNoticesByCategory();
    }, [category]);

    

    const openModal = (data) => {
        setIsModalOpen(true);
        setModalInfo({ ...data});
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setModalInfo(null);
    };

    return <div>
        <NoticesTitle/>
        <NoticesSearch onSubmit={searchNotices} />
        <NoticesCategoriesNav />
        <NoticesCategoriesList items={notices} openModal={openModal} />
        {isModalOpen && <ModalNotice close={closeModal} details={modalInfo} />}
            
    </div>;
}

export default NoticesPage;