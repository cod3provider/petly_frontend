import NoticesSearch from "../NoticesSearch/NoticesSearch";
import NoticesFilters from "../NoticesFilters/NoticesFilters";
import NoticesCategoriesNav from "../NoticesCategoriesNav/NoticesCategoriesNav";
import NoticesCategoriesList from "../NoticesCategoriesList/NoticesCategoriesList";
import AddPetButton from "../AddPetButton/AddPetButton";
import NoticesTitle from "../NoticesTitle/NoticesTitle";
import ModalNotice from "../ModalNotice/ModalNotice";

import { test } from "./test";

import { useState } from "react";

const NoticesPage = () => {
    const searchPets = (query) => {
        console.log(query);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState(null);

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
        <NoticesSearch onSubmit={searchPets} />
        <NoticesCategoriesNav />
        <NoticesCategoriesList items={test} openModal={openModal} />
        {isModalOpen && <ModalNotice close={closeModal} details={modalInfo} />}
            
    </div>;
}

export default NoticesPage;