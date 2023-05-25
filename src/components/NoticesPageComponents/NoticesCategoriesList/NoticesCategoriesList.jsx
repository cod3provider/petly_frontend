import PropTypes from 'prop-types';
import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import {NoticesCategoriesListList} from "./NoticesCategoriesList.styled"

const NoticesCategoriesList = ({ items, openModal }) => {
    return <NoticesCategoriesListList>
        {items.map(item => (<NoticeCategoryItem
            key={item._id}
            data={item}
            openModal={openModal}
        />))}
    </NoticesCategoriesListList>;
}

export default NoticesCategoriesList;

NoticesCategoriesList.propTypes = {
    items: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
}