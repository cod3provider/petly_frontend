import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ContainerStyled } from '../../components/common/Container/Container.styled.jsx';

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
import { BackgroundImageDiv } from '../common/BgImage/BgImage.styled.js';

const AddPet2 = () => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem('addPetState')) || { type: 'your pet' }
  );
  const [step, setStep] = useState('first');
  const isFirstRender = useRef(true);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  let text = '';

  switch (state.type) {
    case 'your pet':
      text = 'Add your pet';
      break;
    case 'sell':
      text = 'Add pet for sell';
      break;
    case 'lostFound':
      text = 'Add lost pet';
      break;
    case 'inGoodHands':
      text = 'Add pet in good hands';
      break;
    default:
      'Oops, this not a category.';
  }
  useEffect(() => {
    const localStoragePet = localStorage.getItem('addPetState');
    const parsedAddPet = JSON.parse(localStoragePet);
    const localStoragePetStep = localStorage.getItem('addPetStep');
    const parsedAddPetStep = JSON.parse(localStoragePetStep);

    if (parsedAddPet && parsedAddPetStep) {
      setState(parsedAddPet);
      setStep(parsedAddPetStep);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem('addPetState', JSON.stringify(state));
    localStorage.setItem('addPetStep', JSON.stringify(step));
  }, [state, step]);

  return (
    <ContainerStyled>
      <Container type={state.type} step={step}>
        <Wrapper type={state.type} step={step}>
          <Title type={state.type} step={step}>
            {text}
          </Title>
          <StepList type={state.type} step={step}>
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
            <FirsStepForm
              setStep={setStep}
              setState={setState}
              step={step}
              state={state}
            />
          )}
          {step === 'second' && (
            <SecondStepForm
              setStep={setStep}
              setState={setState}
              type={state.type}
              step={step}
              state={state}
            />
          )}
          {step === 'third' && (
            <ThirdStepForm
              state={state}
              setStep={setStep}
              setState={setState}
              type={state.type}
              step={step}
              backLinkHref={backLinkHref}
            />
          )}
          {/* <ButtonPet backLinkHref={backLinkHref} step={step} setStep={setStep} /> */}
        </Wrapper>
      </Container>
      <BackgroundImageDiv />
    </ContainerStyled>
  );
};

export default AddPet2;
