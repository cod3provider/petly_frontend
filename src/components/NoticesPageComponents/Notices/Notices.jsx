import NoticesSearch from "../NoticesSearch/NoticesSearch";
import NoticesFilters from "../NoticesFilters/NoticesFilters";
import NoticesCategoriesNav from "../NoticesCategoriesNav/NoticesCategoriesNav";
import NoticesCategoriesList from "../NoticesCategoriesList/NoticesCategoriesList";
import AddPetButton from "../AddPetButton/AddPetButton";
import NoticesTitle from "../NoticesTitle/NoticesTitle";
import ModalNotice from "../ModalNotice/ModalNotice";
import NoticesDeleteModal from "../NoticesDeleteModal/NoticesDeleteModal";
import NoticesPaginationButtons from "../NoticesPaginationButtons/NoticesPaginationButtons";
import { NoticesContainer, NoticesContentBox, NoticesNavBox } from "../NoticesContainers/NoticesContainers.styled";

import { searchNoticesByName, searchNoticesByCategory } from "../../../services/noticesApi";
import { getIsLoggedIn, getUser } from "../../../redux/auth/authSelectors";

import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";

import { getNoticesByPrivateCategory } from '../../../redux/notices/noticesOperations';
import { NoPets } from "./Notices.styled";

const NoticesPage = () => {
    const { categoryName } = useParams();

    let isLoggedIn = useSelector(getIsLoggedIn);
    let user = useSelector(getUser);
  
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deleteModalInfo, setDeleteModalInfo] = useState(null);
    const [query, setQuery] = useState('');
    const [notices, setNotices] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1280);
    const [limit, setLimit] = useState(isWideScreen ? "12" : "10" );
    const [category, setCategory] = useState("sell");

    const dispatch = useDispatch();

    useEffect(() => {
        switch (categoryName) {
            case "sell":
                setCategory("sell");
                break;
            case "lost-found":
                setCategory("lostFound");
                break;
            case "for-free":
                setCategory("inGoodHands");
                break;
            case "favorite":
                setCategory("favorite");
                break;
            case "own":
                setCategory("created");
                break;
            default:
                setCategory(null);
        }
        setPage(1);
    }, [categoryName])

    useEffect(() => {
        const resizeHandler = () => {
            setIsWideScreen(window.innerWidth > 1280);
        };

        resizeHandler();

        if (isWideScreen) {
            setLimit("12");
        } else {
            setLimit("10");
        }

        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, [isWideScreen]);


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
                toast.error(error.message);
            }
        }
        if (query !== '') {
            fetchNoticesByName(category, query, page, limit);
        }
    }, [query, category, page, limit, isWideScreen]);

    useEffect(() => {
        if (query === "") {
            const fetchNoticesByCategory = async () => {
                try {
                    if (category === "sell" || category === "lostFound" || category === "inGoodHands") {
                        const response = await searchNoticesByCategory(category, page, limit);
                        setNotices(response.data);
                        setTotalPages(response.totalPages);
                    }
                    if (category === "favorite" || category === "created") {
                        const response = await dispatch(getNoticesByPrivateCategory({ category, page, limit }));
                        if (response.type === "/getNoticesByPrivateCategory/fulfilled") {
                            if (category === "favorite") {
                                setNotices(response.payload);
                                setTotalPages(1);
                            }
                            if (category === "created") {
                                setNotices(response.payload.data);
                                setTotalPages(response.payload.totalPages);
                            }
                            
                        } else {
                            setNotices([]);
                        }
                    }
                }
                catch (error) {
                    toast.error(error.message);
                }
            }
            fetchNoticesByCategory();
        }
    }, [category, page, limit, isWideScreen, query]);

    const openModal = (data) => {
        setIsModalOpen(true);
        setModalInfo({ ...data});
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setModalInfo(null);
    };

    const openDeleteModal = (data) => {
        setIsDeleteModalOpen(true);
        setDeleteModalInfo({ ...data});
    }

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setDeleteModalInfo(null);
    };

    return <main>
        <NoticesContainer>
                <NoticesContentBox>
                <NoticesTitle />
                <NoticesSearch onSubmit={searchNotices} />
                <NoticesNavBox>
                    <NoticesCategoriesNav isLoggedIn={isLoggedIn} />
                    <AddPetButton isAuth={isLoggedIn} />
                </NoticesNavBox>
                {notices.length ? <NoticesCategoriesList
                    items={notices}
                    openModal={openModal}
                    openDeleteModal={openDeleteModal}
                    user={user}
                    isLoggedIn={isLoggedIn} /> : <NoPets>No pets in this category</NoPets>}
                {!notices.length || <NoticesPaginationButtons currentPage={page} totalPages={totalPages} onPageChange={setPage} />}
                {isModalOpen && <ModalNotice
                    close={closeModal}
                    details={modalInfo}
                    isLoggedIn={isLoggedIn}
                    user={user}
                />}
                {isDeleteModalOpen && <NoticesDeleteModal
                    close={closeDeleteModal}
                    details={deleteModalInfo}
                />}
            </NoticesContentBox>
        </NoticesContainer>
            
    </main>;
}

export default NoticesPage;