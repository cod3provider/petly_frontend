import NoticesSearch from "../../components/NoticesPageComponents/NoticesSearch/NoticesSearch";
import NoticesFilters from "../../components/NoticesPageComponents/NoticesFilters/NoticesFilters";
import NoticesCategoriesNav from "../../components/NoticesPageComponents/NoticesCategoriesNav/NoticesCategoriesNav";
import NoticesCategoriesList from "../../components/NoticesPageComponents/NoticesCategoriesList/NoticesCategoriesList";
import AddPetButton from "../../components/NoticesPageComponents/AddPetButton/AddPetButton";

const NoticesPage = () => {
    const searchPets = () => {
        
    }

    return <div>
        <h1>Find your favourite pet</h1>
        <NoticesSearch onSubmit={searchPets} />
        {/* <NoticesCategoriesNav/> */}
    </div>;
}

export default NoticesPage;