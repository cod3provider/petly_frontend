import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import ButtonPet from '../ButtonPet/ButtonPet';
const SecondStepForm = ({ setStep, setState, type, step }) => {
  const [FormState, setFormState] = useState({
    namePet: '',
    birth: '',
    breed: '',
    titlePet: '',
  });

  // function goBack() {
  //   history.back();
  // }
  // const handleBack = () => {
  //   setStep('first');
  //   setState(prev => ({
  //     ...prev,
  //     ...FormState,
  //   }));
  // };
  const handleChange = e => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log(FormState);
    setStep('third');
    setState(prev => ({
      ...prev,
      ...FormState,
    }));
  };

  const secondStepValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Enter the pet's name")
      // .name('Invalid name format')
      .transform(value => value.charAt(0).toUpperCase() + value.slice(1))
      .min(2)
      .max(16),
    data: yup
      .string()
      .required('Enter a date of birth')
      .matches(
        /^\d{2}\.\d{2}\.\d{4}$/,
        'The date must be in the format DD.MM.YYYY'
      ),
    breed: yup
      .string()
      .required('Enter the breed of the pet')
      // .breed('Invalid breed format')
      .transform(value => value.charAt(0).toUpperCase() + value.slice(1))
      .min(2)
      .max(16),
  });

  return (
    <Formik
      initialValues={FormState}
      onSubmit={handleSubmit}
      validationSchema={secondStepValidationSchema}
    >
      <Form>
        {(type === 'sell' ||
          type === 'lost/found' ||
          type === 'in good hands') && (
          <>
            <label htmlFor="titlePet">Title of add</label>
            <Field
              id="titlePet"
              name="titlePet"
              placeholder="Title pet"
              value={FormState.titlePet}
              onChange={handleChange}
              required
            />
          </>
        )}

        <label htmlFor="namePet">Name pet</label>
        <Field
          id="namePet"
          name="namePet"
          placeholder="Name pet"
          value={FormState.namePet}
          onChange={handleChange}
          required
        />

        <label htmlFor="birth">Date of birth</label>

        <Field
          id="birth"
          name="birth"
          placeholder="Date of birth"
          value={FormState.birth}
          onChange={handleChange}
          required
        />

        <label htmlFor="breed">Breed</label>
        <Field
          id="breed"
          name="breed"
          placeholder="Breed"
          value={FormState.breed}
          onChange={handleChange}
          required
        />

        {/* <button type="button" onClick={handleBack}>
          back
        </button> */}
        <ButtonPet step={step} setStep={setStep} />
      </Form>
    </Formik>
  );
};

export default SecondStepForm;

SecondStepForm.propTypes = {
  setStep: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
};
