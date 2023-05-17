import { IoPawOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';

export const ButtonPet = ({ step }) => {
  if (typeof step === 'undefined') {
    return null;
  }
  return (
    <>
      <button type="submit">
        {step === 'third' ? 'Done' : 'Next'}
        <IoPawOutline />
      </button>
    </>
  );
};

export default ButtonPet;

ButtonPet.propTypes = {
  step: PropTypes.string.isRequired,
};
