import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import ButtonPet from '../ButtonPet/ButtonPet.jsx';
import { LabelRadioBtn, RadioBtnStyle } from './FirsStepForm.styled.js';
const FirsStepForm = ({ setStep, setState, step }) => {
  const categories = ['your pet', 'sell', 'lost/found', 'in good hands'];
  return (
    <Formik
      initialValues={{
        picked: 'your pet',
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
          <div id="my-radio-group">
            {categories.map(categorie => (
              <labLabelRadioBtnel key={categorie}>
                <RadioBtnStyle
                  type="radio"
                  name="picked"
                  value={categorie}
                  required
                  checked={values.picked === categorie}
                  onChange={handleChange}
                />
                {categorie}
              </labLabelRadioBtnel>
            ))}
          </div>

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
};
