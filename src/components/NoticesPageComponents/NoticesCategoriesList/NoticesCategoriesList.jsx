import PropTypes from 'prop-types';
import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import {NoticesCategoriesListList} from "./NoticesCategoriesList.styled"

const NoticesCategoriesList = ({ items, openModal, openDeleteModal, user, isLoggedIn, onFavoriteChange }) => {
    return <NoticesCategoriesListList>
        {items.map(item => (<NoticeCategoryItem
            key={item._id}
            data={item}
            openModal={openModal}
            user={user}
            isLoggedIn={isLoggedIn}
            openDeleteModal={openDeleteModal}
            onFavoriteChange={onFavoriteChange}
        />))}
    </NoticesCategoriesListList>;
}

export default NoticesCategoriesList;

NoticesCategoriesList.propTypes = {
    items: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
    openDeleteModal: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    onFavoriteChange: PropTypes.func.isRequired,
}