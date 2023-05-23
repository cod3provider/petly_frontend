import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import ButtonPet from '../ButtonPet/ButtonPet.jsx';
import { useState } from 'react';

import {
  CheckBox,
  CheckboxSpan,
  CheckboxContainer,
  Label,
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
        <Form>
          <CheckboxContainer id="my-radio-group">
            {categories.map(categorie => (
              <Label key={categorie}>
                <CheckBox
                  type="radio"
                  name="type"
                  value={categorie}
                  required
                  checked={formState.type === categorie}
                  onChange={handleChange}
                />
                <CheckboxSpan>{categorie}</CheckboxSpan>
              </Label>
            ))}
          </CheckboxContainer>

          <ButtonPet step={step} setStep={setStep} />
        </Form>
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
