import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ButtonNext,
  IconButton,
  ButtonBack,
  ArrowButtonIcon,
  LinkStyled,
} from './ButtonPet.styled';

export const ButtonPet = ({ step, setStep, setState }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const handleBack = () => {
    switch (step) {
      case 'first':
        setState({});
        localStorage.setItem('addPetState', JSON.stringify(''));
        localStorage.setItem('addPetStep', JSON.stringify(''));
        navigate(backLinkHref, { replace: true });
        break;
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
        <ArrowButtonIcon />
        {step === 'first' ? (
          <LinkStyled to={backLinkHref}>Cancel</LinkStyled>
        ) : (
          'Back'
        )}
      </ButtonBack>
    </>
  );
};

export default ButtonPet;

ButtonPet.propTypes = {
  step: PropTypes.string.isRequired,
  setStep: PropTypes.func.isRequired,
  setState: PropTypes.func,
};
