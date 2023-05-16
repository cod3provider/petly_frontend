import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SecondStepForm = ({ setStep, setState, type }) => {
  const [FormState, setFormState] = useState({
    namePet: '',
    birth: '',
    breed: '',
    titlePet: '',
  });

  // function goBack() {
  //   history.back();
  // }
  const handleBack = () => {
    setStep('first');
    setState({ step: 'your pet' });
  };

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

  return (
    <Formik initialValues={FormState} onSubmit={handleSubmit}>
      <Form>
        {(type === 'sell' || type === 'lost/found') && (
          <>
            <label htmlFor="titlePet">Title of add</label>
            <Field
              id="titlePet"
              name="titlePet"
              placeholder="Title pet"
              value={FormState.titlePet}
              onChange={handleChange}
              requared
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

        <button type="button" onClick={handleBack}>
          back
        </button>
        <button type="submit">Next step</button>
      </Form>
    </Formik>
  );
};

export default SecondStepForm;

SecondStepForm.propTypes = {
  setStep: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
