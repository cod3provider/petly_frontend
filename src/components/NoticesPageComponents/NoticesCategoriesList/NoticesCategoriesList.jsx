import PropTypes from 'prop-types';
import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import {NoticesCategoriesListList} from "./NoticesCategoriesList.styled"

const NoticesCategoriesList = ({ items, openModal, user, isLoggedIn }) => {
    return <NoticesCategoriesListList>
        {items.length != 0 ? items.map(item => (<NoticeCategoryItem
            key={item._id}
            data={item}
            openModal={openModal}
            user={user}
            isLoggedIn={isLoggedIn}
        />)) : <li><h2>No pets added</h2></li>}
    </NoticesCategoriesListList>;
}

export default NoticesCategoriesList;

NoticesCategoriesList.propTypes = {
    items: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
}