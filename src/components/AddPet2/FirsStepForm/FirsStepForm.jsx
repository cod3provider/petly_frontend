import { Formik } from 'formik';
import PropTypes from 'prop-types';
import ButtonPet from '../ButtonPet/ButtonPet.jsx';
import { useState } from 'react';

import {
  CheckBox,
  CheckboxSpan,
  CheckboxContainer,
  Label,
  FormContainer,
} from './FirsStepForm.styled.js';

const FirsStepForm = ({ setStep, setState, step, state }) => {
  const categories = ['your pet', 'sell', 'lostFound', 'inGoodHands'];

  const [formState, setFormState] = useState({
    type: state.type,
  });

  const handleChange = e => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const categoriesText = categorie => {
    switch (categorie) {
      case 'your pet':
        return 'your pet';
      case 'sell':
        return 'sell';
      case 'lostFound':
        return 'lost/found';
      case 'inGoodHands':
        return 'in good hands';
    }
  };

  return (
    <Formik
      initialValues={formState}
      onSubmit={() => {
        setStep('second');
        setState(prev => ({
          ...prev,
        }));
      }}
    >
      {() => (
        <FormContainer>
          <CheckboxContainer id="my-radio-group">
            {categories.map(categorie => (
              <Label key={categorie} state={state}>
                <CheckBox
                  type="radio"
                  name="type"
                  value={categorie}
                  required
                  checked={formState.type === categorie}
                  onChange={handleChange}
                />
                <CheckboxSpan state={formState} categorie={categorie}>
                  {categoriesText(categorie)}
                </CheckboxSpan>
              </Label>
            ))}
          </CheckboxContainer>

          <ButtonPet step={step} setStep={setStep} setState={setState} />
        </FormContainer>
      )}
    </Formik>
  );
};

export default FirsStepForm;

FirsStepForm.propTypes = {
  setStep: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  step: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
};
