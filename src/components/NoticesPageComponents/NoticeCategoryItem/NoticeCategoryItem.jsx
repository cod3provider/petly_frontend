import PropTypes from 'prop-types';

const NoticeCategoryItem = ({imageUrl, category, location, age, sex, title}) => {
    return <li>
        <div>
            <div>
                <img src={imageUrl} alt="pet photo" />
                <p>{category}</p>
                <ul>
                    <li><button type='button'></button></li>
                    <li><button type='button'></button></li>
                </ul>
                <ul>
                    <li>{location}</li>
                    <li>{age}</li>
                    <li>{sex}</li>
                </ul>
            </div>
            <div>
                <h2>{title}</h2>
                <button type='button'>Learn more</button>
            </div>
        </div>
    </li>;
}

NoticeCategoryItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default NoticeCategoryItem;