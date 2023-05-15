import { useEffect, useRef, useState } from 'react';

import {
  Wrapper,
  Container,
  StepList,
  StepLi,
  Title,
  StepLiFirst,
  StepLiSecond,
  StepLiThird,
} from './AddPet2.styled';

import FirsStepForm from './FirsStepForm/FirsStepForm';
import SecondStepForm from './SecondStepForm/SecondStepForm';
import ThirdStepForm from './ThirdStepForm/ThirdStepForm';

const AddPet2 = () => {
  const [state, setState] = useState({ type: 'your pet' });
  const [title, setTitle] = useState('Oops, this not a category.');
  const [step, setStep] = useState('first');

  useEffect(() => {
    switch (state.type) {
      case 'your pet':
        setTitle('Add your pet');
        break;

      case 'sell':
        setTitle('Add pet for sell');
        break;

      case 'lost/found':
        setTitle('Add lost pet');
        break;

      case 'in good hands':
        setTitle('Add pet in good hands');

        break;
      default:
        'Oops, this not a category.';
    }
  }, [state.type]);

  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <StepList>
          <StepLi>
            <StepLiFirst step={step}>Choose option</StepLiFirst>
          </StepLi>
          <StepLi>
            <StepLiSecond step={step}>Personal details</StepLiSecond>
          </StepLi>
          <StepLi>
            <StepLiThird step={step}>More info</StepLiThird>
          </StepLi>
        </StepList>

        {step === 'first' && (
          <FirsStepForm setStep={setStep} setState={setState} />
        )}
        {step === 'second' && (
          <SecondStepForm
            setStep={setStep}
            setState={setState}
            type={state.type}
          />
        )}
        {step === 'third' && (
          <ThirdStepForm state={state} setStep={setStep} setState={setState} />
        )}
      </Wrapper>
    </Container>
  );
};

export default AddPet2;
