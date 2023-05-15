import PropTypes from 'prop-types';
import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';

const NoticesCategoriesList = ({ items }) => {
    return <ul>
        {items.map(item => (<NoticeCategoryItem
            key={item.id}
            imageUrl={item.imageUrl}
            category={item.category}
            location={item.location}
            age={item.age}
            sex={item.sex}
            title={item.notice}
        />))}
    </ul>;
}

export default NoticesCategoriesList;

NoticesCategoriesList.propTypes = {
    items: PropTypes.array.isRequired,
}