import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";

import { AddPetButtonIcon, AddPetButtonLink } from "./AddPetButton.styled";

const AddPetButton = ({ isAuth }) => {
    const location = useLocation();
    return isAuth ? <AddPetButtonLink to='/add-pet' state={{from: location}}>
        <AddPetButtonIcon />Add pet
    </AddPetButtonLink> : <button type='button'>Add pet</button>;
}

AddPetButton.propTypes = {
    isAuth: PropTypes.bool.isRequired,
}

export default AddPetButton;