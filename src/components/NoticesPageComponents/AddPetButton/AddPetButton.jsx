import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";

import { AddPetButtonIcon, AddPetButtonLink } from "./AddPetButton.styled";

const AddPetButton = ({ isAuth }) => {
    const location = useLocation();
    return isAuth ? <AddPetButtonLink to='/addpet' state={{ from: location }}>
        <AddPetButtonIcon />Add pet
    </AddPetButtonLink> : <AddPetButtonLink to='/login' state={{ from: location }}>
        <AddPetButtonIcon />Add pet
    </AddPetButtonLink>;
}

AddPetButton.propTypes = {
    isAuth: PropTypes.bool.isRequired,
}

export default AddPetButton;