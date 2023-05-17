import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const AddPetButton = ({ isAuth }) => {
    return isAuth ? <NavLink>Add pet</NavLink> : <button type='button'>Add pet</button>;
}

AddPetButton.propTypes = {
    isAuth: PropTypes.bool.isRequired,
}

export default AddPetButton;