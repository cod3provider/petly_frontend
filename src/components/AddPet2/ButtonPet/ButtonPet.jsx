import { IoPawOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const ButtonPet = ({ step, setStep }) => {
  const location = useLocation;
  const backLinkHref = location.state?.from ?? '/';

  const handleBack = () => {
    switch (step) {
      case 'second':
        setStep('first');
        break;
      case 'third':
        setStep('second');
        break;

      default:
        setStep('first');
        break;
    }
  };

  return (
    <>
      <button type="submit">
        {step === 'third' ? 'Done' : 'Next'}
        <IoPawOutline />
      </button>
      <button type="button" onClick={handleBack}>
        {step === 'first' ? <Link to={backLinkHref}>Cancel</Link> : 'Back'}
      </button>
    </>
  );
};

export default ButtonPet;

ButtonPet.propTypes = {
  step: PropTypes.string.isRequired,
  setStep: PropTypes.func.isRequired,
};
