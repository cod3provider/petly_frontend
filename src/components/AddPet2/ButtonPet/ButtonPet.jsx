import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import {
  ButtonNext,
  IconButton,
  ButtonBack,
  ArrowButtonIcon,
} from './ButtonPet.styled';

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

      <ButtonNext type="submit">
        {step === 'third' ? 'Done' : 'Next'}
        <IconButton />
      </ButtonNext>
      <ButtonBack type="button" onClick={handleBack}>
        {step === 'first' ? <Link to={backLinkHref}> <ArrowButtonIcon /> Cancel</Link> : 'Back'}
      </ButtonBack>

    </>
  );
};

export default ButtonPet;

ButtonPet.propTypes = {
  step: PropTypes.string.isRequired,
  setStep: PropTypes.func.isRequired,
};
