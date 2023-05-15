import PropTypes from 'prop-types';

const ModalNotice = ({largeImageUrl, name, category, location, breed, birthday, sex, title, phone, comments}) => {
    return <div>
        <div>
            <button type='button'></button>
            <div>
                <img src={largeImageUrl} alt="pet photo" />
                <p>{category}</p>
            </div>
            <div>
                <h2>{title}</h2>
                <dl>
                    <dt>Name:</dt>
                    <dd>{ name}</dd>
                    <dt>Birthday:</dt>
                    <dd>{ birthday}</dd>
                    <dt>Breed:</dt>
                    <dd>{breed}</dd>
                    <dt>Place:</dt>
                    <dd>{location}</dd>
                    <dt>The sex:</dt>
                    <dd>{sex}</dd>
                    <dt>Email:</dt>
                    <dd>
                        <a href={`mailto:${email}`} >{email}</a>
                    </dd>
                    <dt>Phone:</dt>
                    <dd>
                        <a href={`tel:${phone}`} >{phone}</a>
                    </dd>
                </dl>
            </div>
            <p>Comments:{ comments}</p>
        </div>
    </div>;
}

ModalNotice.propTypes = {
    largeImageUrl: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
}

export default ModalNotice;