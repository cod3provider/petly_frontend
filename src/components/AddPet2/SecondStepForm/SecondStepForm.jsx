import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SecondStepForm = ({ setStep, setState }) => {
  const [FormState, setFormState] = useState({
    namePet: '',
    birth: '',
    breed: '',
    titlePet: '',
  });

  const handleBack = () => {
    setStep('first');
    setState({ type: 'your pet' });
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

  const typeSell = { type: 'sell' };
  // const typeFound = { type: 'lost/found' };
  return (
    <Formik initialValues={FormState} onSubmit={handleSubmit}>
      <Form>
        {typeSell ? (
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
        ) : null}

        {/* {typeFound ? (
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
        ) : null} */}
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
};
