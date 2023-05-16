import { useState } from 'react';
import { Wrapper } from './AddPet2.styled';
import FirsStepForm from './FirsStepForm/FirsStepForm';
import SecondStepForm from './SecondStepForm/SecondStepForm';
import ThirdStepForm from './ThirdStepForm/ThirdStepForm';

const AddPet2 = () => {
  const [State, setState] = useState({ type: null });
  const [Step, setStep] = useState('first');

  console.log(State);

  return (
    <Wrapper>
      <h3>Title</h3>

      {Step === 'first' && (
        <FirsStepForm setStep={setStep} setState={setState} />
      )}
      {Step === 'second' && (
        <SecondStepForm setStep={setStep} setState={setState} />
      )}
      {Step === 'third' && (
        <ThirdStepForm State={State} setStep={setStep} setState={setState} />
      )}
    </Wrapper>
  );
};

export default AddPet2;
