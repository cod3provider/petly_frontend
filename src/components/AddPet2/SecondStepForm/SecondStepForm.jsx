import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

const SecondStepForm = ({ setStep, setState }) => {
  const [FormState, setFormState] = useState({
    namePet: '',
    birth: '',
    breed: '',
  });

  const handleBack = () => {
    setStep('first');
    setState({ type: 'your pet' });
  };

  const handleChange = e => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    setStep('third');
    setState(prev => ({
      ...prev,
      ...FormState,
    }));
  };

  return (
    <Formik initialValues={FormState} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="namePet">Name pet</label>
        <Field
          id="namePet"
          name="namePet"
          placeholder="Name pet"
          value={FormState.namePet}
          onChange={handleChange}
        />

        <label htmlFor="birth">Date of birth</label>

        <Field
          id="birth"
          name="birth"
          placeholder="Date of birth"
          value={FormState.birth}
          onChange={handleChange}
        />

        <label htmlFor="breed">Breed</label>
        <Field
          id="breed"
          name="breed"
          placeholder="Breed"
          value={FormState.breed}
          onChange={handleChange}
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
