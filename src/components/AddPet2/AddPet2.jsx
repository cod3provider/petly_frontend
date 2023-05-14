import { useState } from 'react';
import { Wrapper, Container, StepList, StepLi, Title } from './AddPet2.styled';
import FirsStepForm from './FirsStepForm/FirsStepForm';
import SecondStepForm from './SecondStepForm/SecondStepForm';
import ThirdStepForm from './ThirdStepForm/ThirdStepForm';

const AddPet2 = () => {
  const [state, setState] = useState({ type: 'your pet' });
  const [step, setStep] = useState('first');

  let text = '';

  switch (state.type) {
    case 'your pet':
      text = 'Add your pet';
      break;
    case 'sell':
      text = 'Add pet for sell';
      break;
    case 'lost/found':
      text = 'Add lost pet';
      break;
    case 'in good hands':
      text = 'Add pet in good hands';
      break;
    default:
      'Oops, it not category';
  }

  return (
    <Container>
      <Wrapper>
        <Title>{text}</Title>
        <StepList>
          <StepLi>Choose option</StepLi>
          <StepLi>Personal details</StepLi>
          <StepLi>More info</StepLi>
        </StepList>

        {step === 'first' && (
          <FirsStepForm setStep={setStep} setState={setState} />
        )}
        {step === 'second' && (
          <SecondStepForm setStep={setStep} setState={setState} />
        )}
        {step === 'third' && (
          <ThirdStepForm state={state} setStep={setStep} setState={setState} />
        )}
      </Wrapper>
    </Container>
  );
};

export default AddPet2;
