import NoticesSearch from "../NoticesSearch/NoticesSearch";
import NoticesFilters from "../NoticesFilters/NoticesFilters";
import NoticesCategoriesNav from "../NoticesCategoriesNav/NoticesCategoriesNav";
import NoticesCategoriesList from "../NoticesCategoriesList/NoticesCategoriesList";
import AddPetButton from "../AddPetButton/AddPetButton";
import NoticesTitle from "../NoticesTitle/NoticesTitle";
import ModalNotice from "../ModalNotice/ModalNotice";
import NoticesPaginationButtons from "../NoticesPaginationButtons/NoticesPaginationButtons";
import { NoticesContainer, NoticesContentBox, NoticesNavBox } from "../NoticesContainers/NoticesContainers.styled";

import { searchNoticesByName, searchNoticesByCategory } from "../../../services/noticesApi";
import { getIsLoggedIn, getUser } from "../../../redux/auth/authSelectors";

import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
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

    const isLoggedIn = useSelector(getIsLoggedIn);

    const user = useSelector(getUser);
  
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState(null);
    const [query, setQuery] = useState('');
    const [notices, setNotices] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isWideScreen, setIsWideScreen] = useState(false);
    const [limit, setLimit] = useState("10");

    useEffect(() => {
        function handleResize() {
            setIsWideScreen(window.innerWidth > 1280);
        }

        handleResize();
        if (isWideScreen) {
            setLimit("12");
        } else {
            setLimit("10");
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize); 
        };
    }, []);


    const searchNotices = (query) => {
        setQuery(query);
    }

    useEffect(() => {
        const fetchNoticesByName = async (category, query, page, limit) => {
            try {
                const response = await searchNoticesByName(category, query, page, limit);
                setNotices(response.data);
                setTotalPages(response.totalPages);
            }
            catch (error) {
                alert(error.message);
            }
        }
        if (query !== '') {
            fetchNoticesByName(category, query, page, limit);
        }
    }, [query, category, page, limit]);

    useEffect(() => {
        const fetchNoticesByCategory = async (category, page, limit) => {
            try {
                const response = await searchNoticesByCategory(category, page, limit);
                setNotices(response.data);
                setTotalPages(response.totalPages);
            }
            catch (error) {
                alert(error.message);
            }
        }
        fetchNoticesByCategory(category, page, limit);
    }, [category, page, limit]);

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
                <NoticesSearch onSubmit={searchNotices} />
                <NoticesNavBox>
                    <NoticesCategoriesNav isLoggedIn={isLoggedIn} />
                    <AddPetButton isAuth={true} />
                </NoticesNavBox>
                <NoticesCategoriesList items={notices} openModal={openModal} />
                <NoticesPaginationButtons currentPage={page} totalPages={totalPages} onPageChange={setPage}/>
                {isModalOpen && <ModalNotice
                    close={closeModal}
                    details={modalInfo}
                    isLoggedIn={isLoggedIn}
                    user={user||{}}
                />}
            </NoticesContentBox>
        </NoticesContainer>
            
    </main>;
}

export default NoticesPage;