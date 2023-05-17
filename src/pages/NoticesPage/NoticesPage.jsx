import NoticesSearch from "../../components/NoticesPageComponents/NoticesSearch/NoticesSearch";
import NoticesFilters from "../../components/NoticesPageComponents/NoticesFilters/NoticesFilters";
import NoticesCategoriesNav from "../../components/NoticesPageComponents/NoticesCategoriesNav/NoticesCategoriesNav";
import NoticesCategoriesList from "../../components/NoticesPageComponents/NoticesCategoriesList/NoticesCategoriesList";
import AddPetButton from "../../components/NoticesPageComponents/AddPetButton/AddPetButton";
import NoticesTitle from "../../components/NoticesPageComponents/NoticesTitle/NoticesTitle";
import ModalNotice from "../../components/NoticesPageComponents/ModalNotice/ModalNotice";

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