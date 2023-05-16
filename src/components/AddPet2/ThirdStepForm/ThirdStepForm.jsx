import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

const ThirdStepForm = ({ setStep, State, setState }) => {
  const [FormState, setFormState] = useState({
    location: '',
    price: '',
    comments: '',
  });

  const handleBack = () => {
    setStep('first');
  };

  const handleChange = e => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    setState(prev => ({
      ...prev,
      ...FormState,
    }));

    console.log('Отправляем запрос на сервер с карточкой:', State);

    setStep('first');
  };

  return (
    <Formik initialValues={FormState} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="location">Location</label>
        <Field
          id="location"
          name="location"
          placeholder="Location"
          value={FormState.location}
          onChange={handleChange}
        />

        <label htmlFor="price">Price</label>
        <Field
          id="price"
          name="price"
          placeholder="Price"
          value={FormState.price}
          onChange={handleChange}
        />

        <label htmlFor="Comments">Breed</label>
        <Field
          id="comments"
          name="comments"
          placeholder="Comments"
          value={FormState.comments}
          onChange={handleChange}
        />

        <button type="button" onClick={handleBack}>
          back
        </button>
        <button type="submit">Done</button>
      </Form>
    </Formik>
  );
};

export default ThirdStepForm;
