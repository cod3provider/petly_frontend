import { ContainerButton, ModalTitle, Button } from '../Modals.styled';
import PropTypes from 'prop-types';

const ModalDeletePets = ({ onClick, onClose }) => {
  return (
    <>
      <ModalTitle>Are you sure you want to delete your pet?</ModalTitle>
      <ContainerButton>
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button type="button" onClick={onClick}>
          Yes
        </Button>
      </ContainerButton>
    </>
  );
};

ModalDeletePets.propTypes = {
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ModalDeletePets;
