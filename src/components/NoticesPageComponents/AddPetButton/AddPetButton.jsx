import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import { AddPetButtonIcon, AddPetButtonLink } from "./AddPetButton.styled";

const AddPetButton = ({ isAuth }) => {
    const notify = () => toast.info("You need to be logged in for this action");
    const location = useLocation();
    return isAuth ? <AddPetButtonLink to='/addpet' state={{ from: location }}>
        <AddPetButtonIcon />Add pet
    </AddPetButtonLink> : <AddPetButtonLink to='/login' onClick={notify} state={{ from: location }}>
        <AddPetButtonIcon />Add pet
    </AddPetButtonLink>;
}

AddPetButton.propTypes = {
    isAuth: PropTypes.bool.isRequired,
}

export default AddPetButton;