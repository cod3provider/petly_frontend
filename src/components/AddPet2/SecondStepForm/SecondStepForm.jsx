import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SecondStepForm = ({ setStep, state, setState }) => {
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

  const setTypeCategory = setState => {
    const typeSell = setState({ type: 'sell' });
    const typeFound = setState({ type: 'lost/found' });
    if (typeSell || typeFound) {
      return (
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
      );
    }
    return null;
  };
  // const typeFound = { type: 'lost/found' };
  return (
    <Formik initialValues={FormState} onSubmit={handleSubmit}>
      <Form>
        {(titlePet === typeSell || titlePet === typeFound) && (
          <>{setTypeCategory()}</>
        )}

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
