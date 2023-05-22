import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import ButtonPet from '../ButtonPet/ButtonPet.jsx';


import {
  CheckBox,
  CheckboxSpan,
  CheckboxContainer,
  Label,
} from './FirsStepForm.styled.js';

const FirsStepForm = ({ setStep, setState, step, state }) => {
  const categories = ['your pet', 'sell', 'lostFound', 'inGoodHands'];

  return (
    <Formik
      initialValues={{
        picked: state.type,
      }}
      onSubmit={values => {
        setStep('second');
        setState(prev => ({
          ...prev,
          type: values.picked,
        }));
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <CheckboxContainer id="my-radio-group">
            {categories.map(categorie => (
              <Label key={categorie}>
                <CheckBox
                  type="radio"
                  name="picked"
                  value={categorie}
                  required
                  checked={values.picked === categorie}
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
